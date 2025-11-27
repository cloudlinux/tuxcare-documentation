<template>
  <div class="cve-tracker">
    <!-- Loading State -->
    <div v-if="loading" class="loading-container">
      <div class="loading-spinner"></div>
      <p class="loading-text">Loading resolved CVEs...</p>
    </div>
    <!-- Error State -->
    <div v-else-if="error" class="error-container">
      <h5 class="error-title">Error Loading CVE Data</h5>
      <p class="error-message">{{ error }}</p>
      <button class="retry-button" @click="fetchCVEData">
        Retry
      </button>
    </div>
    <!-- Success State -->
    <div v-else>
      <!-- Stats Cards -->
      <div class="stats-grid" :class="`stats-grid-${visibleCardCount}`">
        <div class="stat-card stat-total">
          <div class="stat-number">{{ filteredCveData.total }}</div>
          <div class="stat-label">Total Resolved</div>
        </div>
        <div class="stat-card stat-critical">
          <div class="stat-number">{{ stats.critical + stats.high }}</div>
          <div class="stat-label">Critical + High</div>
        </div>
        <div class="stat-card stat-medium">
          <div class="stat-number">{{ stats.medium }}</div>
          <div class="stat-label">Medium</div>
        </div>
        <div class="stat-card stat-low">
          <div class="stat-number">{{ stats.low }}</div>
          <div class="stat-label">Low</div>
        </div>
        <div v-if="!hide_none && stats.none > 0" class="stat-card stat-none">
          <div class="stat-number">{{ stats.none }}</div>
          <div class="stat-label">None</div>
        </div>
      </div>
      <!-- Table Container -->
      <div class="table-container">
        <div class="table-wrapper">
          <div ref="tableContainer">
            <table ref="cveTable" class="cve-table">
              <thead>
                <tr>
                  <th class="col-cve">CVE Name</th>
                  <th class="col-severity">Severity</th>
                  <th class="col-score">Score</th> <!-- This will be hidden -->
                  <th class="col-group">Group</th>
                  <th class="col-package">Package</th>
                  <th class="col-vulnerable">Vulnerable Ver.</th>
                  <th class="col-fixed">Fixed Ver.</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="cve in filteredCveData.data" :key="cve.cve_name">
                  <td class="col-cve">
                    <code class="cve-code">{{ cve.cve_name }}</code>
                  </td>
                  <td class="col-severity">
                    <span :class="getSeverityClass(cve.severity_name)" class="severity-badge">
                      {{ cve.severity_name }}
                    </span>
                  </td>
                  <td class="col-score">
                    <span class="score-value">{{ cve.severity_score !== null ? cve.severity_score.toFixed(1) : 'N/A' }}</span>
                  </td> <!-- This will be hidden -->
                  <td class="col-group">
                    <span class="group-text">{{ cve.group }}</span>
                  </td>
                  <td class="col-package">
                    <span class="package-name">{{ cve.name }}</span>
                  </td>
                  <td class="col-vulnerable">
                    <code class="version-vulnerable">{{ cve.version }}</code>
                  </td>
                  <td class="col-fixed">
                    <code class="version-fixed">{{ cve.fixed_version }}</code>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// Import DataTables CSS
import 'datatables.net-dt/css/dataTables.dataTables.min.css';

export default {
  name: 'ResolvedCveTable',
  props: {
    project: {
      type: String,
      required: true
    },
    hide_none: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      loading: true,
      error: null,
      cveData: {
        total: 0,
        data: []
      },
      dataTable: null,
      jQueryLoaded: false
    }
  },
  computed: {
    apiUrl() {
      return `https://spring-els-cves.cl-edu.com/api/v1/resolved-cves?project=${this.project}`
    },
    filteredCveData() {
      if (this.hide_none) {
        const filteredData = this.cveData.data.filter(item => (item.severity_name || '').toLowerCase() !== 'none');
        return {
          ...this.cveData,
          data: filteredData,
          total: filteredData.length
        };
      }
      return this.cveData;
    },
    stats() {
      const stats = { critical: 0, high: 0, medium: 0, low: 0, none: 0 };
      this.filteredCveData.data.forEach(item => {
        const severity = (item.severity_name || '').toLowerCase();
        if (stats.hasOwnProperty(severity)) {
          stats[severity]++;
        }
      });
      return stats;
    },
    visibleCardCount() {
      // Always show 4 cards (Total, Critical+High, Medium, Low)
      // Add 1 more if None card should be visible
      return (!this.hide_none && this.stats.none > 0) ? 5 : 4;
    }
  },
  async mounted() {
    if (typeof window !== 'undefined') {
      // Dynamically import jQuery and DataTables on client-side only
      try {
        const jQuery = (await import('jquery')).default;
        window.$ = window.jQuery = jQuery;
        await import('datatables.net');
        await import('datatables.net-dt');
        this.jQueryLoaded = true;
      } catch (err) {
        console.error('Failed to load jQuery/DataTables:', err);
      }
      this.fetchCVEData()
    }
  },
  beforeDestroy() {
    if (this.dataTable && typeof window !== 'undefined') {
      this.dataTable.destroy()
    }
  },
  methods: {
    async fetchCVEData() {
      if (typeof window === 'undefined') return;
      
      this.loading = true
      this.error = null
      try {
        const response = await fetch(this.apiUrl)
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }
        this.cveData = await response.json()
        this.loading = false
        this.$nextTick(() => {
          this.initializeDataTable()
        })
      } catch (err) {
        this.error = err.message
        this.loading = false
      }
    },
    getSeverityClass(severity) {
      const severityLower = (severity || '').toLowerCase()
      return severityLower ? `severity-${severityLower}` : ''
    },
    initializeDataTable() {
      if (typeof window === 'undefined' || !this.jQueryLoaded || !window.jQuery || !window.jQuery.fn.DataTable) return;
      
      // Custom sorting for severity column
      window.jQuery.fn.dataTable.ext.type.detect.unshift(function(data) {
        return data && typeof data === 'string' && data.includes('severity-') ? 'severity-sort' : null
      })
      window.jQuery.fn.dataTable.ext.type.order['severity-sort-pre'] = function(data) {
        const severity = data.replace(/<[^>]*>/g, '').toLowerCase().trim()
        const severityOrder = {
          'critical': 5,
          'high': 4,
          'medium': 3,
          'low': 2,
          'none': 1
        }
        return severityOrder[severity] !== undefined ? severityOrder[severity] : 0
      }

      // Destroy existing DataTable if it exists
      if (this.dataTable) {
        this.dataTable.destroy()
      }

      // Initialize DataTable with responsive features
      this.dataTable = window.jQuery(this.$refs.cveTable).DataTable({
        order: [[1, 'desc'], [2, 'desc']], // Sort by severity, then score
        pageLength: 10,
        lengthMenu: [[10, 25, 50, 100, -1], [10, 25, 50, 100, "All"]],
        scrollX: true, // Enable horizontal scrolling on mobile
        autoWidth: false, // Better control over column widths
        // Use DataTables 2.x layout option for proper inline controls
        layout: {
          topStart: 'pageLength',
          topEnd: 'search',
          bottomStart: 'info',
          bottomEnd: 'paging'
        },
        columnDefs: [
          {
            targets: '_all',
            render: function(data, type, row) {
              return type === 'display' ? data : data.replace(/<[^>]+>/g, '')
            }
          },
          {
            targets: [5, 6], // Vulnerable Ver. and Fixed Ver.
            className: 'no-wrap',
            visible: true
          },
          {
            targets: 1, // Severity column
            type: 'severity-sort',
            orderable: true
          },
          {
            targets: 2, // Score column
            visible: false
          }
        ],
        language: {
          search: "Search:",
          lengthMenu: "Show _MENU_ entries",
          info: "Showing _START_ to _END_ of _TOTAL_ CVEs",
          emptyTable: "No resolved CVEs found"
        }
      })
    }
  }
}
</script>

<style lang="stylus">

.cve-tracker
  background-color white
  padding 1rem
  border none
  border-radius 0
  font-family -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif
  width 98%
  max-width 98%

// Hide Score column
.cve-tracker .cve-table
  th.col-score
    display none
  td.col-score
    display none

// Loading States
.cve-tracker .loading-container
  display flex
  flex-direction column
  align-items center
  justify-content center
  padding 3rem 0
.cve-tracker .loading-spinner
  width 3rem
  height 3rem
  border 3px solid #e3e3e3
  border-top 3px solid #3498db
  border-radius 50%
  animation spin 1s linear infinite
@keyframes spin
  0%
    transform rotate(0deg)
  100%
    transform rotate(360deg)
.cve-tracker .loading-text
  margin-top 1rem
  color #666
  font-size 0.9rem

// Error States
.cve-tracker .error-container
  background-color #fef2f2
  border 1px solid #fecaca
  color #dc2626
  padding 1rem
  border-radius 8px
.cve-tracker .error-title
  font-weight 600
  margin-bottom 0.5rem
.cve-tracker .error-message
  margin-bottom 0.75rem
.cve-tracker .retry-button
  background-color #3b82f6
  color white
  padding 0.5rem 1rem
  border none
  border-radius 6px
  font-size 0.875rem
  cursor pointer
  transition background-color 0.2s
  &:hover
    background-color #2563eb

// Stats Grid
.cve-tracker .stats-grid
  display grid
  gap 1rem
  margin-bottom 1.5rem

// Mobile: 3 columns or number of cards, whichever is lower
.cve-tracker .stats-grid-4
  grid-template-columns repeat(3, 1fr)
  @media (min-width: 768px)
    grid-template-columns repeat(4, 1fr)

.cve-tracker .stats-grid-5
  grid-template-columns repeat(3, 1fr)
  @media (min-width: 768px)
    grid-template-columns repeat(5, 1fr)
.cve-tracker .stat-card
  padding 1rem
  border-radius 8px
  color white
  text-align center
.cve-tracker .stat-total
  background-color #2563eb
.cve-tracker .stat-critical
  background-color #dc2626
.cve-tracker .stat-medium
  background-color #d97706
.cve-tracker .stat-low
  background-color #16a34a
.cve-tracker .stat-none
  background-color #6b7280
.cve-tracker .stat-number
  font-size 1.5rem
  font-weight bold
  line-height 1
.cve-tracker .stat-label
  font-size 0.75rem
  opacity 0.9
  margin-top 0.25rem

// Table Styles
.cve-tracker .table-container
  background-color white
  border-radius 8px
  box-shadow 0 1px 3px rgba(0, 0, 0, 0.1)
  border 1px solid #e5e7eb
  width 100%
  max-width 100%
.cve-tracker .table-wrapper
  width 100%
  overflow-x auto
  -webkit-overflow-scrolling touch
.cve-tracker .cve-table
  width 100%
  font-size 0.8rem
  border-collapse collapse
  table-layout fixed
  thead th
    background-color #0d1e30
    color white
    padding 0.5rem 0.75rem
    text-align left
    font-weight 600
    font-size 0.75rem
    white-space normal
    word-break break-word
    vertical-align top
  tbody td
    padding 0.5rem 0.75rem
    border-bottom 1px solid #e5e7eb
    font-size 0.75rem
    vertical-align top
    word-break break-word
    white-space normal
  tbody tr:hover
    background-color #f9fafb

// Column width distribution for dynamic stretching
.cve-tracker .cve-table
  .col-cve
    width 15%
  .col-severity
    width 12%
  .col-group
    width 18%
  .col-package
    width 20%
  .col-vulnerable
    width 17%
  .col-fixed
    width 18%

// Content styling
.cve-tracker .cve-code
  background-color #f3f4f6
  padding 0.125rem 0.375rem
  border-radius 3px
  font-size 0.65rem
  font-family 'SF Mono', Monaco, 'Cascadia Code', 'Roboto Mono', Consolas, 'Courier New', monospace
  display inline-block
  max-width 100%
  overflow hidden
  text-overflow ellipsis
  white-space nowrap
.cve-tracker .version-vulnerable
  background-color #fef2f2
  color #dc2626
  padding 0.125rem 0.375rem
  border-radius 3px
  font-size 0.65rem
  font-family 'SF Mono', Monaco, 'Cascadia Code', 'Roboto Mono', Consolas, 'Courier New', monospace
  display inline-block
  max-width 100%
  overflow hidden
  text-overflow ellipsis
  white-space nowrap
.cve-tracker .version-fixed
  background-color #f0fdf4
  color #16a34a
  padding 0.125rem 0.375rem
  border-radius 3px
  font-size 0.65rem
  font-family 'SF Mono', Monaco, 'Cascadia Code', 'Roboto Mono', Consolas, 'Courier New', monospace
  display inline-block
  max-width 100%
  overflow hidden
  text-overflow ellipsis
  white-space nowrap
.cve-tracker .package-name
  font-weight 500
  color #111827
  font-size 0.75rem
  word-wrap break-word
  line-height 1.3
  display block
.cve-tracker .group-text
  font-size 0.75rem
  word-wrap break-word
  line-height 1.3
  display block

// Severity badges
.cve-tracker .severity-badge
  display inline-flex
  align-items center
  padding 0.125rem 0.5rem
  border-radius 12px
  font-size 0.65rem
  font-weight 600
  text-transform uppercase
  letter-spacing 0.025em
  white-space nowrap
.cve-tracker .severity-critical
  background-color #dc2626
  color white
.cve-tracker .severity-high
  background-color #ea580c
  color white
.cve-tracker .severity-medium
  background-color #ca8a04
  color white
.cve-tracker .severity-low
  background-color #16a34a
  color white
.cve-tracker .severity-none
  background-color #6b7280
  color white

// Mobile optimizations
@media (max-width: 768px)
  .cve-tracker .cve-table
    font-size 0.7rem
    thead th
      padding 0.375rem 0.5rem
      font-size 0.7rem
    tbody td
      padding 0.375rem 0.5rem
      font-size 0.7rem

// DataTables Sorting Icons - Critical for sorting visibility
.cve-tracker table.dataTable thead th.sorting,
.cve-tracker table.dataTable thead th.sorting_asc,
.cve-tracker table.dataTable thead th.sorting_desc
  cursor pointer
  position relative
  padding-right 26px !important

.cve-tracker table.dataTable thead th.sorting:before,
.cve-tracker table.dataTable thead th.sorting:after,
.cve-tracker table.dataTable thead th.sorting_asc:before,
.cve-tracker table.dataTable thead th.sorting_asc:after,
.cve-tracker table.dataTable thead th.sorting_desc:before,
.cve-tracker table.dataTable thead th.sorting_desc:after
  position absolute
  display block
  opacity 0.3
  right 10px
  line-height 9px
  font-size 0.8em

.cve-tracker table.dataTable thead th.sorting:before,
.cve-tracker table.dataTable thead th.sorting_asc:before,
.cve-tracker table.dataTable thead th.sorting_desc:before
  content: '▲'
  top 10px

.cve-tracker table.dataTable thead th.sorting:after,
.cve-tracker table.dataTable thead th.sorting_asc:after,
.cve-tracker table.dataTable thead th.sorting_desc:after
  content: '▼'
  top 19px

.cve-tracker table.dataTable thead th.sorting_asc:before
  opacity 1
  color white

.cve-tracker table.dataTable thead th.sorting_desc:after
  opacity 1
  color white

// DataTables 2.x default layout styling - minimal overrides
.cve-tracker :deep(.dt-layout-row)
  display flex
  align-items center
  justify-content space-between
  gap 1rem
  margin-bottom 1rem
  &:last-child
    margin-bottom 0
    margin-top 1rem

.cve-tracker :deep(.dt-layout-cell)
  display flex
  align-items center

.cve-tracker :deep(.dt-length label),
.cve-tracker :deep(.dt-search label)
  display flex
  align-items center
  gap 0.5rem
  margin 0
  white-space nowrap
  font-size 0.875rem

.cve-tracker :deep(.dt-info),
.cve-tracker :deep(.dt-paging)
  color #374151
  font-size 0.875rem

.cve-tracker :deep(.dataTables_filter input),
.cve-tracker :deep(.dt-search input),
.cve-tracker :deep(.dt-input)
  border 1px solid #d1d5db
  border-radius 6px
  padding 0.5rem 0.75rem
  font-size 0.875rem
  &:focus
    outline none
    border-color #3b82f6
    box-shadow 0 0 0 3px rgba(59, 130, 246, 0.1)
.cve-tracker :deep(.dataTables_length select),
.cve-tracker :deep(.dt-length select)
  border 1px solid #d1d5db
  border-radius 6px
  padding 0.5rem 0.75rem
  font-size 0.875rem
  &:focus
    outline none
    border-color #3b82f6
    box-shadow 0 0 0 3px rgba(59, 130, 246, 0.1)
.cve-tracker :deep(.dataTables_paginate .paginate_button),
.cve-tracker :deep(.dt-paging button)
  padding 0.5rem 0.75rem
  font-size 0.875rem
  border 1px solid #d1d5db
  border-radius 6px
  margin 0 0.125rem
  text-decoration none
  color #374151
  &:hover
    background-color #f9fafb
    text-decoration none
.cve-tracker :deep(.dataTables_paginate .paginate_button.current),
.cve-tracker :deep(.dt-paging button.current)
  background-color #3b82f6
  color white
  border-color #3b82f6
  &:hover
    background-color #2563eb
    border-color #2563eb
</style>
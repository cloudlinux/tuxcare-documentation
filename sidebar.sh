#!/bin/bash

output_file="output.json"

echo "export default {" > "${output_file}"

for dir in docs/*/; do
    dir_name=$(basename "$dir")
    echo "    '/${dir_name}/': [" >> "${output_file}"
    echo "        {" >> "${output_file}"
    echo "            collapsable: false," >> "${output_file}"
    echo "            children: [" >> "${output_file}"
    echo "                \"/${dir_name}/\"," >> "${output_file}"

    for subdir in "${dir}"*/; do
        if [ -d "${subdir}" ]; then
            subdir_name=$(basename "${subdir}")
            echo "                \"/${dir_name}/${subdir_name}\"," >> "${output_file}"
        fi
    done

    echo "            ]" >> "${output_file}"
    echo "        }," >> "${output_file}"
    echo "    ]," >> "${output_file}"
done

echo "}" >> "${output_file}"

cat output.json

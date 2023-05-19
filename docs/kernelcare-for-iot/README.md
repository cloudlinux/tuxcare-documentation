# KernelCare for IOT

Provides live security patching for ARM64-based embedded systems for enterprise IoT users and original equipment manufacturers.

For the list of supported distributions and chipsets, [visit this page](https://tuxcare.com/live-patching-services/kernelcare-iot/).

### How KernelCare IoT works

* The KernelCare team is constantly monitoring security mailing lists to check for vulnerabilities. As soon as one is found, the team prepares a patch and then sends it to distribution servers.
* An agent will run a process on your device, checking with the distribution servers every 4 hours until it finds a new patch and then safely apply it to the running kernel without needing to stop it.
* A special kernel module is used to apply the patches. It first loads the update into the kernel address space, then it places relocations on the original code/data to make sure the code block doesn’t execute during the update. Once finished, it will safely switch the execution path from the original to the updated code and then make sure the old code will never run again.
* KernelCare does all of this instantly, automatically, and without service interruptions.

For more information about KernelCare for IOT, [visit this page](https://tuxcare.com/live-patching-services/kernelcare-iot/).
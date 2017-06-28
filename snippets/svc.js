(function() {
    var sc = window.sc;

    var svcTable = [
        null,
        'svcSetHeapSize',
        'svcSetMemoryPermission',
        'svcSetMemoryAttribute',
        'svcMapMemory',
        'svcUnmapMemory',
        'svcQueryMemory',
        'svcExitProcess',
        'svcCreateThread',
        'svcStartThread',
        'svcExitThread',
        'svcSleepThread',
        'svcGetThreadPriority',
        'svcSetThreadPriority',
        'svcGetThreadCoreMask',
        'svcSetThreadCoreMask',
        'svcGetCurrentProcessorNumber',
        'svcSignalEvent',
        'svcClearEvent',
        'svcMapSharedMemory',
        'svcUnmapSharedMemory',
        'svcCreateTransferMemory',
        'svcCloseHandle',
        'svcResetSignal',
        'svcWaitSynchronization',
        'svcCancelSynchronization',
        'svcArbitrateLock',
        'svcArbitrateUnlock',
        'svcWaitProcessWideKeyAtomic',
        'svcSignalProcessWideKey',
        'svcGetSystemTick',
        'svcConnectToNamedPort',
        'svcSendSyncRequestLight',
        'svcSendSyncRequest',
        'svcSendSyncRequestWithUserBuffer',
        'svcSendAsyncRequestWithUserBuffer',
        'svcGetProcessId',
        'svcGetThreadId',
        'svcBreak',
        'svcOutputDebugString',
        'svcReturnFromException',
        'svcGetInfo',
        'svcFlushEntireDataCache',
        'svcFlushDataCache',
        'svcMapPhysicalMemory',
        'svcUnmapPhysicalMemory',
        // 0x2E
        null, // 0x2E
        'svcGetLastThreadInfo',
        'svcGetResourceLimitLimitValue',
        'svcGetResourceLimitCurrentValue',
        'svcSetThreadActivity',
        'svcGetThreadContext3',
        null, // 0x34
        null, // 0x35
        null, // 0x36
        null, // 0x37
        null, // 0x38
        null, // 0x39
        null, // 0x3A
        null, // 0x3B
        'svcDumpInfo',
        null, // 0x3D
        null, // 0x3E
        null, // 0x3F
        'svcCreateSession',
        'svcAcceptSession',
        'svcReplyAndReceiveLight',
        'svcReplyAndReceive',
        'svcReplyAndReceiveWithUserBuffer',
        'svcCreateEvent',
        null, // 0x46
        null, // 0x47
        null, // 0x48
        null, // 0x49
        null, // 0x4A
        null, // 0x4B
        null, // 0x4C
        'svcSleepSystem',
        'svcReadWriteRegister',
        'svcSetProcessActivity',
        'svcCreateSharedMemory',
        'svcMapTransferMemory',
        'svcUnmapTransferMemory',
        'svcCreateInterruptEvent',
        'svcQueryPhysicalAddress',
        'svcQueryIoMapping',
        'svcCreateDeviceAddressSpace',
        'svcAttachDeviceAddressSpace',
        'svcDetachDeviceAddressSpace',
        'svcMapDeviceAddressSpaceByForce',
        'svcMapDeviceAddressSpaceAligned',
        'svcMapDeviceAddressSpace',
        'svcUnmapDeviceAddressSpace',
        'svcInvalidateProcessDataCache',
        'svcStoreProcessDataCache',
        'svcFlushProcessDataCache',
        'svcDebugActiveProcess',
        'svcBreakDebugProcess',
        'svcTerminateDebugProcess',
        'svcGetDebugEvent',
        'svcContinueDebugEvent',
        'svcGetProcessList',
        'svcGetThreadList',
        'svcGetDebugThreadContext',
        'svcSetDebugThreadContext',
        'svcQueryDebugProcessMemory',
        'svcReadDebugProcessMemory',
        'svcWriteDebugProcessMemory',
        'svcSetHardwareBreakPoint',
        'svcGetDebugThreadParam',
        null, // 0x6E
        null, // 0x6F
        'svcCreatePort',
        'svcManageNamedPort',
        'svcConnectToPort',
        'svcSetProcessMemoryPermission',
        'svcMapProcessMemory',
        'svcUnmapProcessMemory',
        'svcQueryProcessMemory',
        'svcMapProcessCodeMemory',
        'svcUnmapProcessCodeMemory',
        'svcCreateProcess',
        'svcStartProcess',
        'svcTerminateProcess',
        'svcGetProcessInfo',
        'svcCreateResourceLimit',
        'svcSetResourceLimitLimitValue',
        'svcCallSecureMonitor',
    ];

    svcTable.forEach(function(funcName, svc) {
        if (funcName === null) {
            return;
        }
        sc[funcName] = function() {
            return sc.svc(svc, Array.prototype.slice.call(arguments));
        };
    });
})();

// vim: ff=dos

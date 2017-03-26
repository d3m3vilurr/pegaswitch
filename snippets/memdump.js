(function() {
    var sc = window.sc;

    var addr = [0, 0];
    var last = [0, 0];

    while(true) {
        var mi = sc.queryMem(addr);
        last = addr;
        addr = utils.add2(mi[0], mi[1]);
        utils.log(utils.paddr(mi[0]) + ' - ' + utils.paddr(addr) + '  ' + mi[2] + ' ' + mi[3]);

        if(mi[3] != 'NONE')
            sc.memdump(mi[0], mi[1][0], 'memdumps/' + utils.paddr(mi[0]) + ' - ' + utils.paddr(addr) + ' - ' + mi[3] + '.bin');

        if(addr[1] < last[1]) {
            utils.log('End');
            break;
        }
    }
})();

// vim: ff=dos

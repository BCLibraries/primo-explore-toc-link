angular
    .module('bc-toc-link', [])
    .controller('prmSearchResultAvailabilityLineAfterController',  [function () {
        var vm=this;
        var isbn = vm.parentCtrl.result.pnx.search.isbn;
        var isbnstring = (typeof getIsbnString(isbn) === undefined) ? "" : getIsbnString(isbn);
        vm.tocLink = "https://plus.syndetics.com/index.php?" + isbnstring + "/toc.html&client=bostonh&type=xw12";

        function getIsbnString(isbn) {
            return "isbn=" + isbn.join("&isbn=");
        }
    }])
    .component('prmSearchResultAvailabilityLineAfter',{
        bindings:{parentCtrl:'<'},
        controller: 'prmSearchResultAvailabilityLineAfterController',
        templateUrl:'primo-explore-toc-link/html/toc-link.html'
});

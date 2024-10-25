document.addEventListener('alpine:init', () => {
    Alpine.data('stickyHeader', () => ({
        ids1: [],
        dataTable1: null,
        tableData1: [
            [1, 1, 'Caroline', 'Jensen', 'carolinejensen@zidant.com', '+1 (821) 447-3782'],
            [2, 2, 'Celeste', 'Grant', 'celestegrant@polarax.com', '+1 (838) 515-3408'],
            [3, 3, 'Tillman', 'Forbes', 'tillmanforbes@manglo.com', '+1 (969) 496-2892'],
            [4, 4, 'Daisy', 'Whitley', 'daisywhitley@applideck.com', '+1 (861) 564-2877'],
            [5, 5, 'Weber', 'Bowman', 'weberbowman@volax.com', '+1 (962) 466-3483'],
            [6, 6, 'Buckley', 'Townsend', 'buckleytownsend@orbaxter.com', '+1 (884) 595-2643'],
            [7, 7, 'Latoya', 'Bradshaw', 'latoyabradshaw@opportech.com', '+1 (906) 474-3155'],
            [8, 8, 'Kate', 'Lindsay', 'katelindsay@gorganic.com', '+1 (930) 546-2952'],
            [9, 9, 'Marva', 'Sandoval', 'marvasandoval@avit.com', '+1 (927) 566-3600'],
            [10, 10, 'Decker', 'Russell', 'deckerrussell@quilch.com', '+1 (846) 535-3283'],
            [11, 11, 'Odom', 'Mills', 'odommills@memora.com', '+1 (995) 525-3402'],
            [12, 12, 'Sellers', 'Walters', 'sellerswalters@zorromop.com', '+1 (830) 430-3157'],
            [13, 13, 'Wendi', 'Powers', 'wendipowers@orboid.com', '+1 (863) 457-2088'],
            [14, 14, 'Sophie', 'Horn', 'sophiehorn@snorus.com', '+1 (885) 418-3948'],
            [15, 15, 'Levine', 'Rodriquez', 'levinerodriquez@xth.com', '+1 (999) 565-3239'],
            [16, 16, 'Little', 'Hatfield', 'littlehatfield@comtract.com', '+1 (812) 488-3011'],
            [17, 17, 'Larson', 'Kelly', 'larsonkelly@zidant.com', '+1 (892) 484-2162'],
            [18, 18, 'Kendra', 'Molina', 'kendramolina@sureplex.com', '+1 (920) 528-3330'],
            [19, 19, 'Ebony', 'Livingston', 'ebonylivingston@danja.com', '+1 (970) 591-3039'],
            [20, 20, 'Kaufman', 'Rush', 'kaufmanrush@euron.com', '+1 (924) 463-2934'],
            [21, 21, 'Frank', 'Hays', 'frankhays@illumity.com', '+1 (930) 577-2670'],
            [22, 22, 'Carmella', 'Mccarty', 'carmellamccarty@sybixtex.com', '+1 (876) 456-3218'],
            [23, 23, 'Massey', 'Owen', 'masseyowen@zedalis.com', '+1 (917) 567-3786'],
            [24, 24, 'Lottie', 'Lowery', 'lottielowery@dyno.com', '+1 (912) 539-3498'],
            [25, 25, 'Addie', 'Luna', 'addieluna@multiflex.com', '+1 (962) 537-2981'],
        ],

        tableData: [
            [
                1,
                1,
                'Caroline',
                'Jensen',
                'carolinejensen@zidant.com',
                '+1 (821) 447-3782',
                'POLARAX',
                '529 Scholes Street',
                39,
                '2004-05-28',
                true,
            ],
            [
                2,
                2,
                'Celeste',
                'Grant',
                'celestegrant@polarax.com',
                '+1 (838) 515-3408',
                'MANGLO',
                '639 Kimball Street',
                32,
                '1989-11-19',
                false,
            ],
            [
                3,
                3,
                'Tillman',
                'Forbes',
                'tillmanforbes@manglo.com',
                '+1 (969) 496-2892',
                'APPLIDECK',
                '240 Vandalia Avenue',
                26,
                '2016-09-05',
                false,
            ],
            [
                4,
                4,
                'Daisy',
                'Whitley',
                'daisywhitley@applideck.com',
                '+1 (861) 564-2877',
                'VOLAX',
                '350 Pleasant Place',
                21,
                '1987-03-23',
                true,
            ],
            [
                5,
                5,
                'Weber',
                'Bowman',
                'weberbowman@volax.com',
                '+1 (962) 466-3483',
                'ORBAXTER',
                '154 Conway Street',
                26,
                '1983-02-24',
                false,
            ],
            [
                6,
                6,
                'Buckley',
                'Townsend',
                'buckleytownsend@orbaxter.com',
                '+1 (884) 595-2643',
                'OPPORTECH',
                '131 Guernsey Street',
                40,
                '2011-05-29',
                true,
            ],
            [
                7,
                7,
                'Latoya',
                'Bradshaw',
                'latoyabradshaw@opportech.com',
                '+1 (906) 474-3155',
                'GORGANIC',
                '668 Lenox Road',
                24,
                '2010-11-23',
                true,
            ],
            [
                8,
                8,
                'Kate',
                'Lindsay',
                'katelindsay@gorganic.com',
                '+1 (930) 546-2952',
                'AVIT',
                '773 Harrison Avenue',
                24,
                '1987-07-02',
                true,
            ],
            [
                9,
                9,
                'Marva',
                'Sandoval',
                'marvasandoval@avit.com',
                '+1 (927) 566-3600',
                'QUILCH',
                '200 Malta Street',
                28,
                '2010-11-02',
                false,
            ],
            [
                10,
                10,
                'Decker',
                'Russell',
                'deckerrussell@quilch.com',
                '+1 (846) 535-3283',
                'MEMORA',
                '708 Bath Avenue',
                27,
                '1994-04-21',
                false,
            ],
            [
                11,
                11,
                'Odom',
                'Mills',
                'odommills@memora.com',
                '+1 (995) 525-3402',
                'ZORROMOP',
                '907 Blake Avenue',
                34,
                '2010-01-24',
                true,
            ],
            [
                12,
                12,
                'Sellers',
                'Walters',
                'sellerswalters@zorromop.com',
                '+1 (830) 430-3157',
                'ORBOID',
                '978 Oakland Place',
                28,
                '1975-11-12',
                true,
            ],
            [
                13,
                13,
                'Wendi',
                'Powers',
                'wendipowers@orboid.com',
                '+1 (863) 457-2088',
                'SNORUS',
                '376 Greenpoint Avenue',
                31,
                '1979-06-02',
                true,
            ],
            [
                14,
                14,
                'Sophie',
                'Horn',
                'sophiehorn@snorus.com',
                '+1 (885) 418-3948',
                'XTH',
                '343 Doughty Street',
                22,
                '2018-09-20',
                true,
            ],
            [
                15,
                15,
                'Levine',
                'Rodriquez',
                'levinerodriquez@xth.com',
                '+1 (999) 565-3239',
                'COMTRACT',
                '643 Allen Avenue',
                27,
                '1973-02-08',
                true,
            ],
            [
                16,
                16,
                'Little',
                'Hatfield',
                'littlehatfield@comtract.com',
                '+1 (812) 488-3011',
                'ZIDANT',
                '194 Anthony Street',
                33,
                '2012-01-03',
                false,
            ],
            [
                17,
                17,
                'Larson',
                'Kelly',
                'larsonkelly@zidant.com',
                '+1 (892) 484-2162',
                'SUREPLEX',
                '978 Indiana Place',
                20,
                '2010-06-14',
                true,
            ],
            [
                18,
                18,
                'Kendra',
                'Molina',
                'kendramolina@sureplex.com',
                '+1 (920) 528-3330',
                'DANJA',
                '567 Charles Place',
                31,
                '2002-07-19',
                false,
            ],
            [
                19,
                19,
                'Ebony',
                'Livingston',
                'ebonylivingston@danja.com',
                '+1 (970) 591-3039',
                'EURON',
                '284 Cass Place',
                33,
                '1994-10-18',
                false,
            ],
            [
                20,
                20,
                'Kaufman',
                'Rush',
                'kaufmanrush@euron.com',
                '+1 (924) 463-2934',
                'ILLUMITY',
                '408 Kingsland Avenue',
                39,
                '2011-07-10',
                false,
            ],
            [
                21,
                21,
                'Frank',
                'Hays',
                'frankhays@illumity.com',
                '+1 (930) 577-2670',
                'SYBIXTEX',
                '973 Caton Place',
                31,
                '2005-06-15',
                false,
            ],
            [
                22,
                22,
                'Carmella',
                'Mccarty',
                'carmellamccarty@sybixtex.com',
                '+1 (876) 456-3218',
                'ZEDALIS',
                '919 Judge Street',
                21,
                '1980-03-06',
                true,
            ],
            [
                23,
                23,
                'Massey',
                'Owen',
                'masseyowen@zedalis.com',
                '+1 (917) 567-3786',
                'DYNO',
                '108 Seaview Avenue',
                40,
                '2012-03-01',
                false,
            ],
            [
                24,
                24,
                'Lottie',
                'Lowery',
                'lottielowery@dyno.com',
                '+1 (912) 539-3498',
                'MULTIFLEX',
                '557 Meserole Avenue',
                36,
                '1982-10-10',
                true,
            ],
            [
                25,
                25,
                'Addie',
                'Luna',
                'addieluna@multiflex.com',
                '+1 (962) 537-2981',
                'PHARMACON',
                '688 Bulwer Place',
                32,
                '1988-05-01',
                true,
            ],
        ],
        ids2: [],
        dataTable2: null,
        tableData2: this.tableData || [],

        ids3: [],
        dataTable3: null,
        tableData3: this.tableData || [],

        init() {
            this.tableData2 = this.tableData;
            this.tableData3 = this.tableData;
            document.addEventListener('DOMContentLoaded', () => {
                this.dataTable1 = new window.DataTable('#myTable1', {
                    data: {
                        data: this.tableData1,
                    },
                    perPage: 20,
                    perPageSelect: [10, 20, 30, 50, 100],
                    columns: [
                        {
                            select: 0,
                            sortable: false,
                            render: (data, cell, row) => {
                                return `<input type="checkbox" class="form-checkbox" x-model="ids1" :value="${data[0].data}" />`;
                            },
                        },
                        {
                            select: 1,
                            render: (data, cell, row) => {
                                return `<strong>#${data[0].data}</strong>`;
                            },
                        },
                    ],
                    firstLast: true,

                    layout: {
                        top: '{search}{select}',
                        bottom: '{info}{pager}',
                    },
                });

                this.dataTable3 = new window.DataTable('#myTable3', {
                    data: {
                        data: this.tableData3,
                    },
                    perPage: 20,
                    perPageSelect: [10, 20, 30, 50, 100],
                    columns: [
                        {
                            select: 0,
                            sortable: false,
                            render: (data, cell, row) => {
                                return `<input type="checkbox" class="form-checkbox" x-model="ids3" :value="${data[0].data}" />`;
                            },
                        },
                        {
                            select: 1,
                            render: (data, cell, row) => {
                                return `<strong>#${data[0].data}</strong>`;
                            },
                        },
                        {
                            select: 4,
                            render: (data, cell, row) => {
                                return `<a href="mailto:${data[0].data}" class="text-primary hover:underline">${data[0].data}</a>`;
                            },
                        },
                        {
                            select: 9,
                            render: (data, cell, row) => {
                                return this.formatDate(data[0].data);
                            },
                        },
                    ],
                    firstLast: true,

                    layout: {
                        top: '{search}{select}',
                        bottom: '{info}{pager}',
                    },
                });
            });
        },

        formatDate(date) {
            if (date) {
                const dt = new Date(date);
                const month = dt.getMonth() + 1 < 10 ? '0' + (dt.getMonth() + 1) : dt.getMonth() + 1;
                const day = dt.getDate() < 10 ? '0' + dt.getDate() : dt.getDate();
                return day + '/' + month + '/' + dt.getFullYear();
            }
            return '';
        },

        checkAll1(isChecked) {
            if (isChecked) {
                this.ids1 = this.tableData1.map(d => {
                    return d[0];
                });
            } else {
                this.ids1 = [];
            }
        },

        checkAll2(isChecked) {
            if (isChecked) {
                this.ids2 = this.tableData2.map(d => {
                    return d[0];
                });
            } else {
                this.ids2 = [];
            }
        },

        checkAll3(isChecked) {
            if (isChecked) {
                this.ids3 = this.tableData3.map(d => {
                    return d[0];
                });
            } else {
                this.ids3 = [];
            }
        },
    }));
});

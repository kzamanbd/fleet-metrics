document.addEventListener('alpine:init', () => {
    Alpine.data('exportTable', () => ({
        dataTable: null,
        init() {
            document.addEventListener('DOMContentLoaded', () => {
                this.dataTable = new window.DataTable('#myTable', {
                    data: {
                        data: [
                            [
                                1,
                                'Caroline',
                                'Jensen',
                                'POLARAX',
                                39,
                                '2004-05-28',
                                'carolinejensen@zidant.com',
                                '+1 (821) 447-3782',
                            ],
                            [
                                2,
                                'Celeste',
                                'Grant',
                                'MANGLO',
                                32,
                                '1989-11-19',
                                'celestegrant@polarax.com',
                                '+1 (838) 515-3408',
                            ],
                            [
                                3,
                                'Tillman',
                                'Forbes',
                                'APPLIDECK',
                                26,
                                '2016-09-05',
                                'tillmanforbes@manglo.com',
                                '+1 (969) 496-2892',
                            ],
                            [
                                4,
                                'Daisy',
                                'Whitley',
                                'VOLAX',
                                21,
                                '1987-03-23',
                                'daisywhitley@applideck.com',
                                '+1 (861) 564-2877',
                            ],
                            [
                                5,
                                'Weber',
                                'Bowman',
                                'ORBAXTER',
                                26,
                                '1983-02-24',
                                'weberbowman@volax.com',
                                '+1 (962) 466-3483',
                            ],
                            [
                                6,
                                'Buckley',
                                'Townsend',
                                'OPPORTECH',
                                40,
                                '2011-05-29',
                                'buckleytownsend@orbaxter.com',
                                '+1 (884) 595-2643',
                            ],
                            [
                                7,
                                'Latoya',
                                'Bradshaw',
                                'GORGANIC',
                                24,
                                '2010-11-23',
                                'latoyabradshaw@opportech.com',
                                '+1 (906) 474-3155',
                            ],
                            [
                                8,
                                'Kate',
                                'Lindsay',
                                'AVIT',
                                24,
                                '1987-07-02',
                                'katelindsay@gorganic.com',
                                '+1 (930) 546-2952',
                            ],
                            [
                                9,
                                'Marva',
                                'Sandoval',
                                'QUILCH',
                                28,
                                '2010-11-02',
                                'marvasandoval@avit.com',
                                '+1 (927) 566-3600',
                            ],
                            [
                                10,
                                'Decker',
                                'Russell',
                                'MEMORA',
                                27,
                                '1994-04-21',
                                'deckerrussell@quilch.com',
                                '+1 (846) 535-3283',
                            ],
                            [
                                11,
                                'Odom',
                                'Mills',
                                'ZORROMOP',
                                34,
                                '2010-01-24',
                                'odommills@memora.com',
                                '+1 (995) 525-3402',
                            ],
                            [
                                12,
                                'Sellers',
                                'Walters',
                                'ORBOID',
                                28,
                                '1975-11-12',
                                'sellerswalters@zorromop.com',
                                '+1 (830) 430-3157',
                            ],
                            [
                                13,
                                'Wendi',
                                'Powers',
                                'SNORUS',
                                31,
                                '1979-06-02',
                                'wendipowers@orboid.com',
                                '+1 (863) 457-2088',
                            ],
                            [
                                14,
                                'Sophie',
                                'Horn',
                                'XTH',
                                22,
                                '2018-09-20',
                                'sophiehorn@snorus.com',
                                '+1 (885) 418-3948',
                            ],
                            [
                                15,
                                'Levine',
                                'Rodriquez',
                                'COMTRACT',
                                27,
                                '1973-02-08',
                                'levinerodriquez@xth.com',
                                '+1 (999) 565-3239',
                            ],
                            [
                                16,
                                'Little',
                                'Hatfield',
                                'ZIDANT',
                                33,
                                '2012-01-03',
                                'littlehatfield@comtract.com',
                                '+1 (812) 488-3011',
                            ],
                            [
                                17,
                                'Larson',
                                'Kelly',
                                'SUREPLEX',
                                20,
                                '2010-06-14',
                                'larsonkelly@zidant.com',
                                '+1 (892) 484-2162',
                            ],
                            [
                                18,
                                'Kendra',
                                'Molina',
                                'DANJA',
                                31,
                                '2002-07-19',
                                'kendramolina@sureplex.com',
                                '+1 (920) 528-3330',
                            ],
                            [
                                19,
                                'Ebony',
                                'Livingston',
                                'EURON',
                                33,
                                '1994-10-18',
                                'ebonylivingston@danja.com',
                                '+1 (970) 591-3039',
                            ],
                            [
                                20,
                                'Kaufman',
                                'Rush',
                                'ILLUMITY',
                                39,
                                '2011-07-10',
                                'kaufmanrush@euron.com',
                                '+1 (924) 463-2934',
                            ],
                            [
                                21,
                                'Frank',
                                'Hays',
                                'SYBIXTEX',
                                31,
                                '2005-06-15',
                                'frankhays@illumity.com',
                                '+1 (930) 577-2670',
                            ],
                            [
                                22,
                                'Carmella',
                                'Mccarty',
                                'ZEDALIS',
                                21,
                                '1980-03-06',
                                'carmellamccarty@sybixtex.com',
                                '+1 (876) 456-3218',
                            ],
                            [
                                23,
                                'Massey',
                                'Owen',
                                'DYNO',
                                40,
                                '2012-03-01',
                                'masseyowen@zedalis.com',
                                '+1 (917) 567-3786',
                            ],
                            [
                                24,
                                'Lottie',
                                'Lowery',
                                'MULTIFLEX',
                                36,
                                '1982-10-10',
                                'lottielowery@dyno.com',
                                '+1 (912) 539-3498',
                            ],
                            [
                                25,
                                'Addie',
                                'Luna',
                                'PHARMACON',
                                32,
                                '1988-05-01',
                                'addieluna@multiflex.com',
                                '+1 (962) 537-2981',
                            ],
                        ],
                    },
                    perPage: 10,
                    perPageSelect: [10, 20, 30, 50, 100],
                    columns: [
                        {
                            select: 0,
                            sort: 'asc',
                        },
                        {
                            select: 5,
                            render: (data, cell, row) => {
                                return data[0].data;
                            },
                        },
                    ],
                    searchable: false,
                    firstLast: true,
                    layout: {
                        top: '{search}{select}',
                        bottom: '{info}{pager}',
                    },
                });
            });
        },

        exportTable(eType) {
            var data = {
                type: eType,
                filename: 'table',
                download: true,
            };

            if (data.type === 'csv') {
                data.lineDelimiter = '\n';
                data.columnDelimiter = ';';
                window.DataTableExportCSV(this.dataTable);
            } else if (data.type === 'json') {
                window.DataTableExportJSON(this.dataTable);
            } else if (data.type === 'txt') {
                window.DataTableExportTXT(this.dataTable);
            }
        },

        printTable() {
            this.dataTable.print();
        },

        formatDate() {
            const dt = new Date();
            const month = dt.getMonth() + 1 < 10 ? '0' + (dt.getMonth() + 1) : dt.getMonth() + 1;
            const day = dt.getDate() < 10 ? '0' + dt.getDate() : dt.getDate();
            return day + '/' + month + '/' + dt.getFullYear();
        },
    }));
});

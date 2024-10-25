document.addEventListener('alpine:init', () => {
    Alpine.data('multiColumn', () => ({
        dataTable: null,
        init() {
            document.addEventListener('DOMContentLoaded', () => {
                this.dataTable = new window.DataTable('#myTable', {
                    data: {
                        headings: ['User', 'Company', 'Age', 'Start Date', 'Email', 'Phone No.'],
                        data: [
                            [
                                'Caroline Jensen',
                                'POLARAX',
                                39,
                                '2004-05-28',
                                'carolinejensen@zidant.com',
                                '+1 (821) 447-3782',
                            ],
                            [
                                'Celeste Grant',
                                'MANGLO',
                                32,
                                '1989-11-19',
                                'celestegrant@polarax.com',
                                '+1 (838) 515-3408',
                            ],
                            [
                                'Tillman Forbes',
                                'APPLIDECK',
                                26,
                                '2016-09-05',
                                'tillmanforbes@manglo.com',
                                '+1 (969) 496-2892',
                            ],
                            [
                                'Daisy Whitley',
                                'VOLAX',
                                21,
                                '1987-03-23',
                                'daisywhitley@applideck.com',
                                '+1 (861) 564-2877',
                            ],
                            [
                                'Weber Bowman',
                                'ORBAXTER',
                                26,
                                '1983-02-24',
                                'weberbowman@volax.com',
                                '+1 (962) 466-3483',
                            ],
                            [
                                'Buckley Townsend',
                                'OPPORTECH',
                                40,
                                '2011-05-29',
                                'buckleytownsend@orbaxter.com',
                                '+1 (884) 595-2643',
                            ],
                            [
                                'Latoya Bradshaw',
                                'GORGANIC',
                                24,
                                '2010-11-23',
                                'latoyabradshaw@opportech.com',
                                '+1 (906) 474-3155',
                            ],
                            ['Kate Lindsay', 'AVIT', 24, '1987-07-02', 'katelindsay@gorganic.com', '+1 (930) 546-2952'],
                            [
                                'Marva Sandoval',
                                'QUILCH',
                                28,
                                '2010-11-02',
                                'marvasandoval@avit.com',
                                '+1 (927) 566-3600',
                            ],
                            [
                                'Decker Russell',
                                'MEMORA',
                                27,
                                '1994-04-21',
                                'deckerrussell@quilch.com',
                                '+1 (846) 535-3283',
                            ],
                            ['Odom Mills', 'ZORROMOP', 34, '2010-01-24', 'odommills@memora.com', '+1 (995) 525-3402'],
                            [
                                'Sellers Walters',
                                'ORBOID',
                                28,
                                '1975-11-12',
                                'sellerswalters@zorromop.com',
                                '+1 (830) 430-3157',
                            ],
                            ['Wendi Powers', 'SNORUS', 31, '1979-06-02', 'wendipowers@orboid.com', '+1 (863) 457-2088'],
                            ['Sophie Horn', 'XTH', 22, '2018-09-20', 'sophiehorn@snorus.com', '+1 (885) 418-3948'],
                            [
                                'Levine Rodriquez',
                                'COMTRACT',
                                27,
                                '1973-02-08',
                                'levinerodriquez@xth.com',
                                '+1 (999) 565-3239',
                            ],
                            [
                                'Little Hatfield',
                                'ZIDANT',
                                33,
                                '2012-01-03',
                                'littlehatfield@comtract.com',
                                '+1 (812) 488-3011',
                            ],
                            [
                                'Larson Kelly',
                                'SUREPLEX',
                                20,
                                '2010-06-14',
                                'larsonkelly@zidant.com',
                                '+1 (892) 484-2162',
                            ],
                            [
                                'Kendra Molina',
                                'DANJA',
                                31,
                                '2002-07-19',
                                'kendramolina@sureplex.com',
                                '+1 (920) 528-3330',
                            ],
                            [
                                'Ebony Livingston',
                                'EURON',
                                33,
                                '1994-10-18',
                                'ebonylivingston@danja.com',
                                '+1 (970) 591-3039',
                            ],
                            [
                                'Kaufman Rush',
                                'ILLUMITY',
                                39,
                                '2011-07-10',
                                'kaufmanrush@euron.com',
                                '+1 (924) 463-2934',
                            ],
                            ['Frank Hays', 'SYBIXTEX', 31, '2005-06-15', 'frankhays@illumity.com', '+1 (930) 577-2670'],
                            [
                                'Carmella Mccarty',
                                'ZEDALIS',
                                21,
                                '1980-03-06',
                                'carmellamccarty@sybixtex.com',
                                '+1 (876) 456-3218',
                            ],
                            ['Massey Owen', 'DYNO', 40, '2012-03-01', 'masseyowen@zedalis.com', '+1 (917) 567-3786'],
                            [
                                'Lottie Lowery',
                                'MULTIFLEX',
                                36,
                                '1982-10-10',
                                'lottielowery@dyno.com',
                                '+1 (912) 539-3498',
                            ],
                            [
                                'Addie Luna',
                                'PHARMACON',
                                32,
                                '1988-05-01',
                                'addieluna@multiflex.com',
                                '+1 (962) 537-2981',
                            ],
                        ],
                    },
                    searchable: true,
                    perPage: 10,
                    perPageSelect: [10, 20, 30, 50, 100],
                    columns: [
                        {
                            select: 0,
                            render: (data, cell, row) => {
                                // get random number between 1 and 10
                                const random = Math.floor(Math.random() * 10) + 1;
                                return `<div class="flex items-center w-max">
                                <img class="w-9 h-9 rounded-full mr-2 object-cover" src="/images/users/avatar-${random}.png" />
                            ${data[0].data}</div>`;
                            },
                            sort: 'asc',
                        },
                        {
                            select: 3,
                            render: (data, cell, row) => {
                                return data[0].data;
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
            const dt = new Date(date);
            const month = dt.getMonth() + 1 < 10 ? '0' + (dt.getMonth() + 1) : dt.getMonth() + 1;
            const day = dt.getDate() < 10 ? '0' + dt.getDate() : dt.getDate();
            return day + '/' + month + '/' + dt.getFullYear();
        },
    }));
});

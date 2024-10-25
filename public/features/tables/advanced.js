document.addEventListener('alpine:init', () => {
    Alpine.data('advanced', () => ({
        dataTable: null,
        countryList: [
            {
                code: 'AE',
                name: 'United Arab Emirates',
            },
            {
                code: 'AR',
                name: 'Argentina',
            },
            {
                code: 'AT',
                name: 'Austria',
            },
            {
                code: 'AU',
                name: 'Australia',
            },
            {
                code: 'BE',
                name: 'Belgium',
            },
            {
                code: 'BG',
                name: 'Bulgaria',
            },
            {
                code: 'BN',
                name: 'Brunei',
            },
            {
                code: 'BR',
                name: 'Brazil',
            },
            {
                code: 'BY',
                name: 'Belarus',
            },
            {
                code: 'CA',
                name: 'Canada',
            },
            {
                code: 'CH',
                name: 'Switzerland',
            },
            {
                code: 'CL',
                name: 'Chile',
            },
            {
                code: 'CN',
                name: 'China',
            },
            {
                code: 'CO',
                name: 'Colombia',
            },
            {
                code: 'CZ',
                name: 'Czech Republic',
            },
            {
                code: 'DE',
                name: 'Germany',
            },
            {
                code: 'DK',
                name: 'Denmark',
            },
            {
                code: 'DZ',
                name: 'Algeria',
            },
            {
                code: 'EC',
                name: 'Ecuador',
            },
            {
                code: 'EG',
                name: 'Egypt',
            },
            {
                code: 'ES',
                name: 'Spain',
            },
            {
                code: 'FI',
                name: 'Finland',
            },
            {
                code: 'FR',
                name: 'France',
            },
            {
                code: 'GB',
                name: 'United Kingdom',
            },
            {
                code: 'GR',
                name: 'Greece',
            },
            {
                code: 'HK',
                name: 'Hong Kong',
            },
            {
                code: 'HR',
                name: 'Croatia',
            },
            {
                code: 'HU',
                name: 'Hungary',
            },
            {
                code: 'ID',
                name: 'Indonesia',
            },
            {
                code: 'IE',
                name: 'Ireland',
            },
            {
                code: 'IL',
                name: 'Israel',
            },
            {
                code: 'IN',
                name: 'India',
            },
            {
                code: 'IT',
                name: 'Italy',
            },
            {
                code: 'JO',
                name: 'Jordan',
            },
            {
                code: 'JP',
                name: 'Japan',
            },
            {
                code: 'KE',
                name: 'Kenya',
            },
            {
                code: 'KH',
                name: 'Cambodia',
            },
            {
                code: 'KR',
                name: 'South Korea',
            },
            {
                code: 'KZ',
                name: 'Kazakhstan',
            },
            {
                code: 'LA',
                name: 'Laos',
            },
            {
                code: 'LK',
                name: 'Sri Lanka',
            },
            {
                code: 'MA',
                name: 'Morocco',
            },
            {
                code: 'MM',
                name: 'Myanmar',
            },
            {
                code: 'MO',
                name: 'Macau',
            },
            {
                code: 'MX',
                name: 'Mexico',
            },
            {
                code: 'MY',
                name: 'Malaysia',
            },
            {
                code: 'NG',
                name: 'Nigeria',
            },
            {
                code: 'NL',
                name: 'Netherlands',
            },
            {
                code: 'NO',
                name: 'Norway',
            },
            {
                code: 'NZ',
                name: 'New Zealand',
            },
            {
                code: 'PE',
                name: 'Peru',
            },
            {
                code: 'PH',
                name: 'Philippines',
            },
            {
                code: 'PK',
                name: 'Pakistan',
            },
            {
                code: 'PL',
                name: 'Poland',
            },
            {
                code: 'PT',
                name: 'Portugal',
            },
            {
                code: 'QA',
                name: 'Qatar',
            },
            {
                code: 'RO',
                name: 'Romania',
            },
            {
                code: 'RS',
                name: 'Serbia',
            },
            {
                code: 'RU',
                name: 'Russia',
            },
            {
                code: 'SA',
                name: 'Saudi Arabia',
            },
            {
                code: 'SE',
                name: 'Sweden',
            },
            {
                code: 'SG',
                name: 'Singapore',
            },
            {
                code: 'SK',
                name: 'Slovakia',
            },
            {
                code: 'TH',
                name: 'Thailand',
            },
            {
                code: 'TN',
                name: 'Tunisia',
            },
            {
                code: 'TR',
                name: 'Turkey',
            },
            {
                code: 'TW',
                name: 'Taiwan',
            },
            {
                code: 'UK',
                name: 'Ukraine',
            },
            {
                code: 'UG',
                name: 'Uganda',
            },
            {
                code: 'US',
                name: 'United States',
            },
            {
                code: 'VN',
                name: 'Vietnam',
            },
            {
                code: 'ZA',
                name: 'South Africa',
            },
            {
                code: 'BA',
                name: 'Bosnia and Herzegovina',
            },
            {
                code: 'BD',
                name: 'Bangladesh',
            },
            {
                code: 'EE',
                name: 'Estonia',
            },
            {
                code: 'IQ',
                name: 'Iraq',
            },
            {
                code: 'LU',
                name: 'Luxembourg',
            },
            {
                code: 'LV',
                name: 'Latvia',
            },
            {
                code: 'MK',
                name: 'North Macedonia',
            },
            {
                code: 'SI',
                name: 'Slovenia',
            },
            {
                code: 'PA',
                name: 'Panama',
            },
        ],
        init() {
            document.addEventListener('DOMContentLoaded', () => {
                this.dataTable = new window.DataTable('#myTable', {
                    data: {
                        headings: [
                            'ID',
                            'User',
                            'Country',
                            'Email',
                            'Progress',
                            'Phone',
                            "<div class='text-center'>Rate</div>",
                            'Progress',
                            'Status',
                        ],
                        data: [
                            [
                                1,
                                'Caroline Jensen',
                                '',
                                'carolinejensen@zidant.com',
                                39,
                                '+1 (821) 447-3782',
                                '',
                                '',
                                '',
                            ],
                            [2, 'Celeste Grant', '', 'celestegrant@polarax.com', 32, '+1 (838) 515-3408', '', '', ''],
                            [3, 'Tillman Forbes', '', 'tillmanforbes@manglo.com', 26, '+1 (969) 496-2892', '', '', ''],
                            [4, 'Daisy Whitley', '', 'daisywhitley@applideck.com', 21, '+1 (861) 564-2877', '', '', ''],
                            [5, 'Weber Bowman', '', 'weberbowman@volax.com', 26, '+1 (962) 466-3483', '', '', ''],
                            [
                                6,
                                'Buckley Townsend',
                                '',
                                'buckleytownsend@orbaxter.com',
                                40,
                                '+1 (884) 595-2643',
                                '',
                                '',
                                '',
                            ],
                            [
                                7,
                                'Latoya Bradshaw',
                                '',
                                'latoyabradshaw@opportech.com',
                                24,
                                '+1 (906) 474-3155',
                                '',
                                '',
                                '',
                            ],
                            [8, 'Kate Lindsay', '', 'katelindsay@gorganic.com', 24, '+1 (930) 546-2952', '', '', ''],
                            [9, 'Marva Sandoval', '', 'marvasandoval@avit.com', 28, '+1 (927) 566-3600', '', '', ''],
                            [10, 'Decker Russell', '', 'deckerrussell@quilch.com', 27, '+1 (846) 535-3283', '', '', ''],
                            [11, 'Odom Mills', '', 'odommills@memora.com', 34, '+1 (995) 525-3402', '', '', ''],
                            [
                                12,
                                'Sellers Walters',
                                '',
                                'sellerswalters@zorromop.com',
                                28,
                                '+1 (830) 430-3157',
                                '',
                                '',
                                '',
                            ],
                            [13, 'Wendi Powers', '', 'wendipowers@orboid.com', 31, '+1 (863) 457-2088', '', '', ''],
                            [14, 'Sophie Horn', '', 'sophiehorn@snorus.com', 22, '+1 (885) 418-3948', '', '', ''],
                            [
                                15,
                                'Levine Rodriquez',
                                '',
                                'levinerodriquez@xth.com',
                                27,
                                '+1 (999) 565-3239',
                                '',
                                '',
                                '',
                            ],
                            [
                                16,
                                'Little Hatfield',
                                '',
                                'littlehatfield@comtract.com',
                                33,
                                '+1 (812) 488-3011',
                                '',
                                '',
                                '',
                            ],
                            [17, 'Larson Kelly', '', 'larsonkelly@zidant.com', 20, '+1 (892) 484-2162', '', '', ''],
                            [18, 'Kendra Molina', '', 'kendramolina@sureplex.com', 31, '+1 (920) 528-3330', '', '', ''],
                            [
                                19,
                                'Ebony Livingston',
                                '',
                                'ebonylivingston@danja.com',
                                33,
                                '+1 (970) 591-3039',
                                '',
                                '',
                                '',
                            ],
                            [20, 'Kaufman Rush', '', 'kaufmanrush@euron.com', 39, '+1 (924) 463-2934', '', '', ''],
                            [21, 'Frank Hays', '', 'frankhays@illumity.com', 31, '+1 (930) 577-2670', '', '', ''],
                            [
                                22,
                                'Carmella Mccarty',
                                '',
                                'carmellamccarty@sybixtex.com',
                                21,
                                '+1 (876) 456-3218',
                                '',
                                '',
                                '',
                            ],
                            [23, 'Massey Owen', '', 'masseyowen@zedalis.com', 40, '+1 (917) 567-3786', '', '', ''],
                            [24, 'Lottie Lowery', '', 'lottielowery@dyno.com', 36, '+1 (912) 539-3498', '', '', ''],
                            [25, 'Addie Luna', '', 'addieluna@multiflex.com', 32, '+1 (962) 537-2981', '', '', ''],
                        ],
                    },
                    searchable: true,
                    perPage: 10,
                    perPageSelect: [10, 20, 30, 50, 100],
                    columns: [
                        {
                            select: 0,
                            render: (data, cell, row) => {
                                return `<strong class="text-info">#${data[0].data}</strong>`;
                            },
                        },
                        {
                            select: 1,
                            render: (data, cell, row) => {
                                return `<div class="flex items-center gap-2">
                                    <img src="/images/users/avatar-${this.getRandomNumber(
                                        1,
                                        10,
                                    )}.png" class="w-9 h-9 rounded-full max-w-none" alt="user-profile" />
                                    <div class="font-semibold">${data[0].data}</div>
                            </div>`;
                            },
                        },
                        {
                            select: 2,
                            render: (data, cell, row) => {
                                const country = this.getCountry();
                                return `<div class="flex items-center gap-2">
                                <img width="24" src="/images/flags/${country.code}.svg" class="max-w-none" alt="user profile" />
                                <div>${country.name}</div>
                            </div>`;
                            },
                            sortable: false,
                        },
                        {
                            select: 3,
                            render: (data, cell, row) => {
                                return `<a href="mailto:${data}" class="text-primary hover:underline">${data[0].data}</a>`;
                            },
                        },
                        {
                            select: 4,
                            render: (data, cell, row) => {
                                return `<div class="w-4/5 min-w-[100px] h-2.5 bg-[#ebedf2] dark:bg-dark/40 rounded-full flex">
                                <div class="h-2.5 rounded-full rounded-bl-full text-center text-white text-xs bg-${this.randomStatusColor()}" style="width:${this.getRandomNumber(
                                    15,
                                    100,
                                )}%"></div>
                            </div>`;
                            },
                            sortable: false,
                        },
                        {
                            select: 6,
                            render: (data, cell, row) => {
                                let str = '<div class="flex items-center justify-center text-warning">';
                                for (let i = 0; i < this.getRandomNumber(1, 5); i++) {
                                    str += `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star" viewBox="0 0 16 16">
                                <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>
                              </svg>`;
                                }
                                str += '</div>';
                                return str;
                            },
                            sortable: false,
                        },
                        {
                            select: 7,
                            render: (data, cell, row) => {
                                return `<div style="width: 150px"> <div class="progress-chart"></div></div>`;
                            },
                            sortable: false,
                        },
                        {
                            select: 8,
                            render: (data, cell, row) => {
                                return `<span class="badge badge-outline-${this.randomStatusColor()}">${this.randomStatus()}</span>`;
                            },
                            sortable: false,
                        },
                    ],
                    firstLast: true,
                    layout: {
                        top: '{search}{select}',
                        bottom: '{info}{pager}',
                    },
                });

                this.dataTable.on('datatable.sort', () => {
                    this.initChart();
                });

                this.dataTable.on('datatable.page', () => {
                    this.initChart();
                });

                this.dataTable.on('datatable.perpage', () => {
                    this.initChart();
                });

                setTimeout(() => {
                    this.initChart();
                }, 300);
            });
        },

        initChart() {
            const ele = document.querySelectorAll('.progress-chart');
            let chart = [];
            for (let i = 0; i < ele.length; i++) {
                ele[i].innerHTML = '';
                chart[i] = new ApexCharts(ele[i], this.chart_options);
                chart[i].render();
            }
        },

        get chart_options() {
            let option = {
                series: [
                    {
                        data: [21, 9, 36, 12, 44, 25, 59],
                    },
                ],
                chart: {
                    type: 'line',
                    height: 30,
                    sparkline: {
                        enabled: true,
                    },
                },
                stroke: {
                    curve: 'smooth',
                    width: 2,
                },
                markers: {
                    size: [4, 7],
                    strokeWidth: 0,
                },
                colors: [this.randomColor()],
                grid: {
                    padding: {
                        top: 5,
                        bottom: 5,
                    },
                },
                tooltip: {
                    x: {
                        show: false,
                    },
                    y: {
                        title: {
                            formatter: () => {
                                return '';
                            },
                        },
                    },
                },
            };
            return option;
        },

        randomColor() {
            const color = ['#4361ee', '#805dca', '#00ab55', '#e7515a', '#e2a03f', '#2196f3'];
            const random = Math.floor(Math.random() * color.length);
            return color[random];
        },

        randomStatusColor() {
            const color = ['primary', 'secondary', 'success', 'danger', 'warning', 'info'];
            const random = Math.floor(Math.random() * color.length);
            return color[random];
        },

        randomStatus() {
            const status = ['PAID', 'APPROVED', 'FAILED', 'CANCEL', 'SUCCESS', 'PENDING', 'COMPLETE'];
            const random = Math.floor(Math.random() * status.length);
            return status[random];
        },

        getRandomNumber(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        },

        getCountry() {
            const random = Math.floor(Math.random() * this.countryList.length);
            return this.countryList[random];
        },
    }));
});

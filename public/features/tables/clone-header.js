document.addEventListener('alpine:init', () => {
    Alpine.data('cloneHeader', () => ({
        dataTable: null,
        init() {
            document.addEventListener('DOMContentLoaded', () => {
                this.dataTable = new window.DataTable('#myTable', {
                    data: {
                        headings: ['ID', 'First Name', 'Last Name', 'Email', 'Phone'],
                        data: [
                            [1, 'Caroline', 'Jensen', 'carolinejensen@zidant.com', '+1 (821) 447-3782'],
                            [2, 'Celeste', 'Grant', 'celestegrant@polarax.com', '+1 (838) 515-3408'],
                            [3, 'Tillman', 'Forbes', 'tillmanforbes@manglo.com', '+1 (969) 496-2892'],
                            [4, 'Daisy', 'Whitley', 'daisywhitley@applideck.com', '+1 (861) 564-2877'],
                            [5, 'Weber', 'Bowman', 'weberbowman@volax.com', '+1 (962) 466-3483'],
                            [6, 'Buckley', 'Townsend', 'buckleytownsend@orbaxter.com', '+1 (884) 595-2643'],
                            [7, 'Latoya', 'Bradshaw', 'latoyabradshaw@opportech.com', '+1 (906) 474-3155'],
                            [8, 'Kate', 'Lindsay', 'katelindsay@gorganic.com', '+1 (930) 546-2952'],
                            [9, 'Marva', 'Sandoval', 'marvasandoval@avit.com', '+1 (927) 566-3600'],
                            [10, 'Decker', 'Russell', 'deckerrussell@quilch.com', '+1 (846) 535-3283'],
                            [11, 'Odom', 'Mills', 'odommills@memora.com', '+1 (995) 525-3402'],
                            [12, 'Sellers', 'Walters', 'sellerswalters@zorromop.com', '+1 (830) 430-3157'],
                            [13, 'Wendi', 'Powers', 'wendipowers@orboid.com', '+1 (863) 457-2088'],
                            [14, 'Sophie', 'Horn', 'sophiehorn@snorus.com', '+1 (885) 418-3948'],
                            [15, 'Levine', 'Rodriquez', 'levinerodriquez@xth.com', '+1 (999) 565-3239'],
                            [16, 'Little', 'Hatfield', 'littlehatfield@comtract.com', '+1 (812) 488-3011'],
                            [17, 'Larson', 'Kelly', 'larsonkelly@zidant.com', '+1 (892) 484-2162'],
                            [18, 'Kendra', 'Molina', 'kendramolina@sureplex.com', '+1 (920) 528-3330'],
                            [19, 'Ebony', 'Livingston', 'ebonylivingston@danja.com', '+1 (970) 591-3039'],
                            [20, 'Kaufman', 'Rush', 'kaufmanrush@euron.com', '+1 (924) 463-2934'],
                            [21, 'Frank', 'Hays', 'frankhays@illumity.com', '+1 (930) 577-2670'],
                            [22, 'Carmella', 'Mccarty', 'carmellamccarty@sybixtex.com', '+1 (876) 456-3218'],
                            [23, 'Massey', 'Owen', 'masseyowen@zedalis.com', '+1 (917) 567-3786'],
                            [24, 'Lottie', 'Lowery', 'lottielowery@dyno.com', '+1 (912) 539-3498'],
                            [25, 'Addie', 'Luna', 'addieluna@multiflex.com', '+1 (962) 537-2981'],
                        ],
                    },
                    footer: true,
                    searchable: true,
                    perPage: 10,
                    perPageSelect: [10, 20, 30, 50, 100],
                    columns: [
                        {
                            select: 0,
                            sort: 'asc',
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
    }));
});

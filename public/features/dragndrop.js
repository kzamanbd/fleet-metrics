document.addEventListener('alpine:init', () => {
    Alpine.data('draggable', () => ({
        items: [
            {
                id: 1,
                text: 'Need to be approved',
                name: 'Kelly Young',
            },
            {
                id: 2,
                text: 'Meeting with client',
                name: 'Andy King',
            },
            {
                id: 3,
                text: 'Project Detail',
                name: 'Judy Holmes',
            },
            {
                id: 4,
                text: 'Edited Post Apporval',
                name: 'Vincent Carpenter',
            },
            {
                id: 5,
                text: 'Project Lead Pickup',
                name: 'Mary McDonald',
            },
        ],
    }));
});
document.addEventListener('DOMContentLoaded', function () {
    // Basic
    const example1 = document.getElementById('example1');
    window.Sortable.create(example1, {
        animation: 200,
        ghostClass: 'gu-transit',
        group: 'shared',
    });
    const example2 = document.getElementById('example2');
    window.Sortable.create(example2, {
        animation: 200,
        ghostClass: 'gu-transit',
        group: 'shared',
    });

    // Icon change
    const example3 = document.getElementById('example3');
    window.Sortable.create(example3, {
        animation: 200,
        ghostClass: 'gu-transit',
        group: 'icon',
    });
    const example4 = document.getElementById('example4');
    window.Sortable.create(example4, {
        animation: 200,
        ghostClass: 'gu-transit',
        group: 'icon',
    });

    // Handler
    const example5 = document.getElementById('example5');
    window.Sortable.create(example5, {
        animation: 200,
        handle: '.handle',
        group: 'handler',
        ghostClass: 'gu-transit',
    });
    const example6 = document.getElementById('example6');
    window.Sortable.create(example6, {
        animation: 200,
        handle: '.handle',
        group: 'handler',
        ghostClass: 'gu-transit',
    });

    //Multiple Drag
    const example7 = document.getElementById('example7');
    window.Sortable.create(example7, {
        animation: 200,
        group: 'multiple',
        multiDrag: true,
        selectedClass: 'selected',
        fallbackTolerance: 3,
        ghostClass: 'gu-transit',
    });
    const example8 = document.getElementById('example8');
    window.Sortable.create(example8, {
        animation: 200,
        group: 'multiple',
        multiDrag: true,
        selectedClass: 'selected',
        fallbackTolerance: 3,
        ghostClass: 'gu-transit',
    });

    //Delete User
    const example13 = document.getElementById('example13');
    window.Sortable.create(example13, {
        animation: 200,
        group: 'delete',
        removeOnSpill: true,
    });
    const example14 = document.getElementById('example14');
    window.Sortable.create(example14, {
        animation: 200,
        group: 'delete',
        removeOnSpill: true,
    });

    //News Feed
    const example12 = document.getElementById('example12');
    window.Sortable.create(example12, {
        animation: 200,
    });

    //Swap
    const example9 = document.getElementById('example9');
    window.Sortable.create(example9, {
        animation: 200,
        group: 'swap',
        swap: true,
    });
    const example10 = document.getElementById('example10');
    window.Sortable.create(example10, {
        animation: 200,
        group: 'swap',
        swap: true,
    });

    //Grid drag
    const example11 = document.getElementById('example11');
    window.Sortable.create(example11, {
        animation: 200,
    });
    // nested
    const sortables = document.querySelectorAll('#hs-nested-sortable .nested-sortable');

    for (var i = 0; i < sortables.length; i++) {
        window.Sortable.create(sortables[i], {
            group: 'nested',
            animation: 150,
            fallbackOnBody: true,
            swapThreshold: 0.65,
        });
    }
});

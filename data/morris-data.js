$(function() {

    // Morris.Area({
    //     element: 'morris-area-chart',
    //     data: [{
    //         period: '2010 Q1',
    //         iphone: 100,
    //         ipad: null,
    //         itouch: 2647,
    //         macbook: 100
    //     }, {
    //         period: '2010 Q2',
    //         iphone: 2778,
    //         ipad: 2294,
    //         itouch: 2441,
    //         macbook: 2234
    //     }, {
    //         period: '2010 Q3',
    //         iphone: 4912,
    //         ipad: 1969,
    //         itouch: 2501,
    //         macbook: 3434
    //     }, {
    //         period: '2010 Q4',
    //         iphone: 3767,
    //         ipad: 3597,
    //         itouch: 5689,
    //         macbook: 3412
    //     }, {
    //         period: '2011 Q1',
    //         iphone: 6810,
    //         ipad: 1914,
    //         itouch: 2293,
    //         macbook: 4534
    //     }, {
    //         period: '2011 Q2',
    //         iphone: 5670,
    //         ipad: 4293,
    //         itouch: 1881,
    //         macbook: 4543
    //     }, {
    //         period: '2011 Q3',
    //         iphone: 4820,
    //         ipad: 3795,
    //         itouch: 1588,
    //         macbook: 5453
    //     }, {
    //         period: '2011 Q4',
    //         iphone: 15073,
    //         ipad: 5967,
    //         itouch: 5175,
    //         macbook: 4153
    //     }, {
    //         period: '2012 Q1',
    //         iphone: 10687,
    //         ipad: 4460,
    //         itouch: 2028,
    //         macbook: 4542
    //     }, {
    //         period: '2012 Q2',
    //         iphone: 8432,
    //         ipad: 5713,
    //         itouch: 1791,
    //         macbook: 2435
    //     }, {
    //         period: '2012 Q3',
    //         iphone: 32,
    //         ipad: 1969,
    //         itouch: 2501,
    //         macbook: 4322
    //     }],
    //     xkey: 'period',
    //     ykeys: ['iphone', 'ipad', 'itouch','macbook'],
    //     labels: ['iPhone', 'iPad', 'iPod Touch','macbook'],
    //     pointSize: 2,
    //     hideHover: 'auto',
    //     resize: true
    // });

    // Morris.Donut({
    //     element: 'morris-donut-chart',
    //     data: [{
    //         label: "Download Sales",
    //         value: 25
    //     },{
    //         label: "Download Sales",
    //         value: 25
    //     }, {
    //         label: "In-Store Sales",
    //         value: 25
    //     }, {
    //         label: "Mail-Order Sales",
    //         value: 25
    //     }],
    //     resize: true
    // });

    Morris.Bar({
        element: 'morris-bar-chart',
        data: [{
            y: '2006',
            a: 100,
            b: 90,
            c: 30
        }, {
            y: '2007',
            a: 75,
            b: 65,
            c: 34
        }, {
            y: '2008',
            a: 50,
            b: 40,
            c: 35
        }, {
            y: '2009',
            a: 75,
            b: 65,
            c: 45
        }, {
            y: '2010',
            a: 50,
            b: 40,
            c: 35
        }, {
            y: '2011',
            a: 75,
            b: 65,
            c: 344
        }, {
            y: '2012',
            a: 100,
            b: 90,
            c: 45
        }],
        xkey: 'y',
        ykeys: ['a', 'b','c'],
        labels: ['Series A', 'Series B','Series C'],
        hideHover: 'auto',
        resize: true
    });
    
});

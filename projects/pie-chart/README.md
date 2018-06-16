# ngx-d3-pie-chart

This library is a simple Angular component featuring a pie chart rendered with D3.js.
It's probably useful, but it's principal purpose it to illustrate the article
I've published at https://www.beyondjava.net/ngx-d3-pie-chart.

However, feel free to contribute pull request to make this library a first-class citizen
of the Angular and D3 world!

## State of the art

The library has been developed with Angular 6. In theory, it should work with older versions
of Angular, too, but I haven't tested this yet.

## How to use the library

There's a minimalistic demo project at https://github.com/stephanrauh/ngx-d3/tree/simple-pie-chart.

### Installation

Install the library with npm i ngx-d3-pie-chart --save

### Adding the library to the Angular HTML template

```html
<lib-pie-chart [data]="pieChartData"></lib-pie-chart>
```

### Declaring the data in the Angular component class

```JavaScript
import { PieChartData } from 'projects/pie-chart/src/public_api';

...

public pieChartData: Array<PieChartData>: Array<PieChartData> = [
    { value: 10, caption: 'apples', color: 'green' },
    { value: 20, caption: 'oranges', color: 'orange' },
    { value: 30, caption: 'bananas', color: 'yellow' }
  ];
```

## Feedback, pull requests and bug reports

Pull requests and bug reports are welcome. Please send them to the bug tracker of
the project page: https://github.com/stephanrauh/ExploringAngular/tree/master/embedding-pdf

## License and Kudos

ngx-d3-pie-chart has been published under an Apache V2 license.

The library is based on https://github.com/d3, which has been published under an BSD 3-Clause "New" or "Revised" License

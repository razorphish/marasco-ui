import { Component, OnInit } from '@angular/core';

@Component({
  standalone: true,
  selector: 'ma-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.css'],
})
export class HeaderComponent implements OnInit {
  //loadAPI: Promise<any>;

  constructor() {
    // this.loadAPI = new Promise((resolve) => {
    //   this.loadScript();
    //   resolve(true);
    // });
  }

  ngOnInit() {}

  ngAfterViewInit() {
    //We loading the player script on after view is loaded
    //this.loadScript();
    //this.loadScript();
  }

  public loadScript_old() {
    let body = <HTMLDivElement>document.body;
    let script = document.createElement('script');
    script.innerHTML = 'test.ts';
    script.src = 'url';
    script.async = true;
    script.defer = true;
    body.appendChild(script);
  }

  public loadScript() {
    var isFound = false;
    var scripts = document.getElementsByTagName('script');
    for (var i = 0; i < scripts.length; ++i) {
      if (
        scripts[i].getAttribute('src') != null &&
        scripts[i].getAttribute('src')!.includes('loader')
      ) {
        isFound = true;
      }
    }

    console.log('Step 1')
    if (!isFound) {
      // var dynamicScripts = [
      //   'https://widgets.skyscanner.net/widget-server/js/loader.js',
      // ];

      console.log('Step2')
      var dynamicScripts = [
        'assets/js/qubico.js',
        'assets/js/jquery.flexslider.js'
      ]

      for (var i = 0; i < dynamicScripts.length; i++) {
        let node = document.createElement('script');
        node.src = dynamicScripts[i];
        node.type = 'text/javascript';
        node.async = false;
        node.charset = 'utf-8';
        document.getElementsByTagName('head')[0].appendChild(node);
      }
    }
  }
}

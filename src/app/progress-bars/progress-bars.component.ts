import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';
import { NgClass, NgStyle}           from '@angular/common';
import 'rxjs/add/operator/switchMap';

import { Project, Resource } from './../project';

@Component({
  selector: 'progress-bars',
  templateUrl: './progress-bars.component.html',
  styleUrls: ['./../project-detail/project-detail.component.css']
})

export class ProgressBarsComponent implements OnInit {
  @Input() isDetail: boolean;
  @Input() resources: Resource[];
  progress_volunteer: number; // Percentage of progress (0 - 1.0)
  needed_volunteer: number; // Number of volunteers needed
  progress_funding: number; // Percentage of progress (0 - 1.0)
  needed_funding: number; // Number of fundings needed
  progress_donation: number; // Percentage of progress (0 - 1.0)
  needed_donation: number; // Number of donations needed

  ngOnInit(): void {
    var ideal_sum = {
      'volunteer':0,
      'funding' : 0,
      'donation': 0
      };
    var current_sum = {
      'volunteer':0,
      'funding' : 0,
      'donation': 0
      };

    this.resources.forEach(resource => {
      ideal_sum[resource.type] += resource.ideal_number;
      current_sum[resource.type] += resource.current_number;
    });
    var types = ['volunteer', 'funding', 'donation'];
    types.forEach(type => {
      var key = ['progress_', type].join('')
      this[key] = Math.round(current_sum[type]/ideal_sum[type]*100);

      if (!this.isDetail)
        return;
      key = ['needed_', type].join('')
      this[key] = ideal_sum[type]-current_sum[type];
    })

  // console.log("progress_volunteer = " + this.progress_volunteer);
  // console.log("needed_volunteer = " + this.needed_volunteer);
  // console.log("progress_funding = " + this.progress_funding);
  // console.log("needed_funding = " + this.needed_funding);
  // console.log("progress_donation = " + this.progress_donation);
  // console.log("needed_donation = " + this.needed_donation);
  }
}
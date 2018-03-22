import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class ChartDataService {
  designationsData = new BehaviorSubject(
    {
      programmerAnalystCount: 0,
      businessAnalystCount: 0,
      designAnalystCount: 0,
      qualityAnalystCount: 0
    });
  constructor() { }

  updateDesignationsData(designationsData): void {
    this.designationsData.next(designationsData);
  }

}

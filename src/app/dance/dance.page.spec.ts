import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { DancePage } from './dance.page';

describe('DancePage', () => {
  let component: DancePage;
  let fixture: ComponentFixture<DancePage>;
  let dancePage: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DancePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(async () => {
    fixture = await TestBed.createComponent(DancePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a dance of 10 elements', () => {
    dancePage = fixture.nativeElement;
    const items = dancePage.querySelectorAll('ion-item');
    expect(items.length).toEqual(10);
  });

});

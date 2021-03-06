/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CompilerComponent } from './compiler.component';

describe('CompilerComponent', () => {
  let component: CompilerComponent;
  let fixture: ComponentFixture<CompilerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompilerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompilerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

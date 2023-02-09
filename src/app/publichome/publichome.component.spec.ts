import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublichomeComponent } from './publichome.component';

describe('PublichomeComponent', () => {
  let component: PublichomeComponent;
  let fixture: ComponentFixture<PublichomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublichomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PublichomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

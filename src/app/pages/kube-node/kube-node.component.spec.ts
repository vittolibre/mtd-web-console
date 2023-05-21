import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KubeNodeComponent } from './kube-node.component';

describe('KubeNodeComponent', () => {
  let component: KubeNodeComponent;
  let fixture: ComponentFixture<KubeNodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KubeNodeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KubeNodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

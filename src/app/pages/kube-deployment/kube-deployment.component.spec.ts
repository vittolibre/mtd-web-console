import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KubeDeploymentComponent } from './kube-deployment.component';

describe('KubeDeploymentComponent', () => {
  let component: KubeDeploymentComponent;
  let fixture: ComponentFixture<KubeDeploymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KubeDeploymentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KubeDeploymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

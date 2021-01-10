import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AturinPage } from './aturin.page';

describe('AturinPage', () => {
  let component: AturinPage;
  let fixture: ComponentFixture<AturinPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AturinPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AturinPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

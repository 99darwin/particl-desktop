import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PassphraseComponent } from '../shared/passphrase/passphrase.component';
import { ModalsModule } from '../modals.module';
import { SharedModule } from '../../shared/shared.module';

import { RpcModule } from '../../core/rpc/rpc.module';


describe('PassphraseComponent', () => {
  let component: PassphraseComponent;
  let fixture: ComponentFixture<PassphraseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        SharedModule,
        ModalsModule,
        RpcModule.forRoot()
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PassphraseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
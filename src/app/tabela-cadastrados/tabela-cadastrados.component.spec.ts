import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabelaCadastradosComponent } from './tabela-cadastrados.component';

describe('TabelaCadastradosComponent', () => {
  let component: TabelaCadastradosComponent;
  let fixture: ComponentFixture<TabelaCadastradosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabelaCadastradosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TabelaCadastradosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

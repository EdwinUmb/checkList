import { Component } from '@angular/core';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-check-list',
  templateUrl: './check-list.component.html',
  styleUrls: ['./check-list.component.css'],
})
export class CheckListComponent {
  questions: any[] = [];
  mostImportant: number = 0;
  totalNa: number = 0;
  totalSi: number = 0;
  idNa: string = 'NA';
  idSi: string = 'SI';

  arrNa: any[] = [];
  arrSi: any[] = [];

  handleImport($event: any) {
    const files = $event.target.files;
    if (files.length) {
      const file = files[0];
      const reader = new FileReader();
      reader.onload = (event: any) => {
        const wb = XLSX.read(event.target.result);
        const sheets = wb.SheetNames;

        if (sheets.length) {
          const rows = XLSX.utils.sheet_to_json(wb.Sheets[sheets[0]], {
            raw: true,
            blankrows: true,
            defval: '',
          });
          this.questions = rows;
        }
        //console.log(this.questions);
        this.validateMostImportant(this.questions);
      };
      reader.readAsArrayBuffer(file);
    }
  }

  validateMostImportant(arr: any[]) {
    arr.forEach((element) => {
      if (element.pesos != null && !element.criterio.includes('Total')) {
        if (element.pesos > this.mostImportant) {
          this.mostImportant = element.pesos;
        }
      }
    });
    console.log(this.mostImportant);
  }

  event(event, question) {
    console.log(event.target.id);

    if (event.target.id.includes('NA')) {
      console.log('contiene na', question);
      this.arrNa.push({
        id: event.target.id,
        description: question,
      });
    } else if (event.target.id.includes('SI')) {
      console.log('radio si', question);
      this.arrSi.push({
        id: event.target.id,
        description: question,
      });
      this.arrSi.forEach((element) => {});
    }
    console.log('this is arrNA', this.arrNa);
    console.log('this is arrSI', this.arrSi);
    console.log('this is totalSI', this.totalSi);
  }

  verifyIncludes(word: string) {
    if (word.includes('*')) {
      return true;
    } else {
      return false;
    }
  }

  onChange(row) {
    console.log(row);
  }

  verifyBlank(word: string) {
    if (word === '') {
      return true;
    } else {
      return false;
    }
  }

  verifyBlankClass(word: string) {
    if (this.verifyBlank(word)) {
      return 'hiddenBlank';
    }
  }

  validateTitle(word: string) {
    if (this.verifyIncludes(word)) {
      return 'title';
    }
  }

  validateColspan(word: string) {
    if (this.verifyIncludes(word)) {
      return 4;
    }
  }

  validateRadio(word: string) {
    if (
      this.verifyIncludes(word) ||
      word.includes('Total') ||
      this.verifyBlank(word)
    ) {
      return 'hiddenRadio';
    }
  }
}

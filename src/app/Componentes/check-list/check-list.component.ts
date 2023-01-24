import { Component, OnInit } from '@angular/core';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-check-list',
  templateUrl: './check-list.component.html',
  styleUrls: ['./check-list.component.css'],
})
export class CheckListComponent {
  questions: any[] = [];

  handleImport($event: any) {
    const files = $event.target.files;
    if (files.length) {
      const file = files[0];
      const reader = new FileReader();
      reader.onload = (event: any) => {
        const wb = XLSX.read(event.target.result);
        const sheets = wb.SheetNames;

        if (sheets.length) {
          const rows = XLSX.utils.sheet_to_json(wb.Sheets[sheets[0]]);
          this.questions = rows;
        }
        console.log(this.questions);
      };
      reader.readAsArrayBuffer(file);
    }
  }

  verifyIncludes(word: string) {
    if (word.includes('*')) {
      return true;
    } else {
      return false;
    }
  }

  validateTitle(word: string) {
    if (this.verifyIncludes(word)) {
      return 'title';
    }
  }

  validateTotal(word: string) {
    if (word.includes('Total')) {
      console.log(3);

      return 3;
    }
  }

  validateColspan(word: string) {
    if (this.verifyIncludes(word)) {
      return 4;
    }
  }

  validateRadio(word: string) {
    if (this.verifyIncludes(word) || word.includes('Total')) {
      return 'hiddenRadio';
    }
  }
}

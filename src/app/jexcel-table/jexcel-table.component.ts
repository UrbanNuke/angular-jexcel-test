import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, ViewChild, ViewEncapsulation } from '@angular/core';
import * as jexcel from 'jexcel';

@Component({
  selector: 'app-jexcel-table',
  templateUrl: './jexcel-table.component.html',
  styleUrls: ['./jexcel-table.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class JexcelTableComponent implements AfterViewInit {

 	/** Ссылка на таблицу в шаблоне */
	@ViewChild('spreadsheet') spreadsheet: ElementRef;

	/** Путь до файла */
	urlFile = './jexcel-example.xlsx';

	ngAfterViewInit() {
		// @ts-ignore
		jexcel.fromSpreadsheet(this.urlFile, result => {
			if (!result.length) {
				console.error('JEXCEL: Something went wrong.');
				return;
			}

			jexcel(this.spreadsheet.nativeElement, {
				data:  result[0].data,
				columns:  result[0].columns.map(() => ({
					align: 'left',
					width: 280,
					wordWrap: true,
				})),
				tableWidth: '100%',
				tableHeight: '100%',
				tableOverflow: true,
				lazyLoading: true,
				loadingSpin: true,
				contextMenu: () => false,
				columnSorting: false,
				minDimensions: [result[0].columns.length, result[0].rows.length]
			});
		});
	}

}

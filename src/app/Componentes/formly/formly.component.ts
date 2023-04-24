import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from "@ngx-formly/core";

@Component({
  selector: 'app-formly',
  templateUrl: './formly.component.html',
  styleUrls: ['./formly.component.css']
})
export class FormlyComponent implements OnInit {

  json = [
    {
      "id": "id-Logico",
      "nombre": "i18n-Logico",
      "requerida": true,
      "buscable": true,
      "ordenable": true,
      "visible": true,
      "tipo": "Logico",
      "urlMacroCliente": "./macro",
      "valorDefault": "false",
      "configuracionTabular": {
        "indice": 0,
        "mostrarEnTabla": true,
        "alternarEnTabla": true
      }
    },
    {
      "id": "id-LogicoFalse",
      "nombre": "i18n-LogicoFalse",
      "requerida": true,
      "buscable": true,
      "ordenable": true,
      "visible": true,
      "tipo": "Logico",
      "urlMacroCliente": "./macro",
      "valorDefault": "true",
      "configuracionTabular": {
        "indice": 0,
        "mostrarEnTabla": true,
        "alternarEnTabla": true
      }
    },
    {
      "id": "id-ListaSeleccionSimple",
      "nombre": "i18n-ListaSeleccionSimple",
      "requerida": true,
      "buscable": true,
      "ordenable": true,
      "visible": true,
      "tipo": "ListaSeleccionSimple",
      "urlMacroCliente": "./macro",
      "valorDefault": "E",
      "configuracionTabular": {
        "indice": 1,
        "mostrarEnTabla": true,
        "alternarEnTabla": true
      },
      "lista": {
        "id": null,
        "ordenamiento": "Ninguno",
        "datosRemotos": false,
        "endpointBusqueda": false,
        "endpoint": null,
        "elementos": [
          {
            "id": "1",
            "nombre": "Elemento A",
            "valor": "A",
            "posicion": 1
          },
          {
            "id": "2",
            "nombre": "Elemento B",
            "valor": "B",
            "posicion": 2
          },
          {
            "id": "3",
            "nombre": "Elemento C",
            "valor": "C",
            "posicion": 0
          },
          {
            "id": "4",
            "nombre": "Elemento D",
            "valor": "D",
            "posicion": 3
          },
          {
            "id": "5",
            "nombre": "Elemento E",
            "valor": "E",
            "posicion": 5
          },
          {
            "id": "6",
            "nombre": "Elemento F",
            "valor": "F",
            "posicion": 4
          }
        ]
      }
    },
    {
      "id": "id-Fecha",
      "nombre": "i18n-Fecha",
      "requerida": true,
      "buscable": true,
      "ordenable": true,
      "visible": true,
      "tipo": "Fecha",
      "urlMacroCliente": "./macro",
      "valorDefault": "\"2010-02-02T00:00:00\"",
      "configuracionTabular": {
        "indice": 2,
        "mostrarEnTabla": true,
        "alternarEnTabla": true
      },
      "validadorFecha": {
        "minimo": "2001-01-01T06:00:00.000Z",
        "maximo": "2028-12-31T06:00:00.000Z"
      }
    },
    {
      "id": "id-FechaHora",
      "nombre": "i18n-FechaHora",
      "requerida": true,
      "buscable": true,
      "ordenable": true,
      "visible": true,
      "tipo": "FechaHora",
      "urlMacroCliente": "./macro",
      "valorDefault": "\"2010-01-01T12:00:00\"",
      "configuracionTabular": {
        "indice": 3,
        "mostrarEnTabla": true,
        "alternarEnTabla": true
      },
      "validadorFecha": {
        "minimo": "2001-01-01T06:00:00.000Z",
        "maximo": "2029-01-01T05:29:59.000Z"
      }
    },
    {
      "id": "id-Decimal",
      "nombre": "i18n-Decimal",
      "requerida": true,
      "buscable": true,
      "ordenable": true,
      "visible": true,
      "tipo": "Decimal",
      "urlMacroCliente": "./macro",
      "valorDefault": "10",
      "configuracionTabular": {
        "indice": 4,
        "mostrarEnTabla": true,
        "alternarEnTabla": true
      },
      "validadorNumerico": {
        "minimo": -100.1,
        "maximo": 100.1
      }
    },
    {
      "id": "id-Entero",
      "nombre": "i18n-Entero",
      "requerida": true,
      "buscable": true,
      "ordenable": true,
      "visible": true,
      "tipo": "Entero",
      "urlMacroCliente": "./macro",
      "valorDefault": "-1",
      "configuracionTabular": {
        "indice": 5,
        "mostrarEnTabla": true,
        "alternarEnTabla": true
      },
      "validadorNumerico": {
        "minimo": -10,
        "maximo": 10
      }
    },
    {
      "id": "id-Hora",
      "nombre": "i18n-Hora",
      "requerida": true,
      "buscable": true,
      "ordenable": true,
      "visible": true,
      "tipo": "Hora",
      "urlMacroCliente": "./macro",
      "valorDefault": "\"2001-01-01T12:30:00\"",
      "configuracionTabular": {
        "indice": 6,
        "mostrarEnTabla": true,
        "alternarEnTabla": true
      },
      "validadorFecha": {
        "minimo": "2001-01-01T14:00:00.000Z",
        "maximo": "2001-01-02T00:30:00.000Z"
      }
    },
    {
      "id": "id-ListaSeleccionMultiple",
      "nombre": "i18n-ListaSeleccionMultiple",
      "requerida": true,
      "buscable": true,
      "ordenable": true,
      "visible": true,
      "tipo": "ListaSeleccionMultiple",
      "urlMacroCliente": "./macro",
      "valorDefault": "B",
      "configuracionTabular": {
        "indice": 7,
        "mostrarEnTabla": true,
        "alternarEnTabla": true
      },
      "lista": {
        "id": null,
        "ordenamiento": "Ninguno",
        "datosRemotos": false,
        "endpointBusqueda": false,
        "endpoint": null,
        "elementos": [
          {
            "id": "1",
            "nombre": "Elemento A",
            "valor": "A",
            "posicion": 1
          },
          {
            "id": "2",
            "nombre": "Elemento B",
            "valor": "B",
            "posicion": 2
          },
          {
            "id": "3",
            "nombre": "Elemento C",
            "valor": "C",
            "posicion": 0
          },
          {
            "id": "4",
            "nombre": "Elemento D",
            "valor": "D",
            "posicion": 3
          }
        ]
      }
    },
    {
      "id": "id-Texto",
      "nombre": "i18n-Texto",
      "requerida": true,
      "buscable": true,
      "ordenable": true,
      "visible": true,
      "tipo": "Texto",
      "urlMacroCliente": "./macro",
      "valorDefault": "sorpresa!",
      "configuracionTabular": {
        "indice": 8,
        "mostrarEnTabla": true,
        "alternarEnTabla": true
      },
      "validadorTexto": {
        "longitudMinima": 1,
        "longitudMaxima": 10,
        "regExp": null
      }
    },
    {
      "id": "id-TextoIndexado",
      "nombre": "i18n-TextoIndexado",
      "requerida": true,
      "buscable": true,
      "ordenable": true,
      "visible": true,
      "tipo": "TextoIndexado",
      "urlMacroCliente": "./macro",
      "valorDefault": "...",
      "configuracionTabular": {
        "indice": 9,
        "mostrarEnTabla": true,
        "alternarEnTabla": true
      }
    }
  ]

  subtypeForm: string = ''
  haveSubtype: boolean = false
  isMultiSelect: boolean = false
  formValue: any
  selectOptions = []
  value: any

  constructor() { }

  ngOnInit(): void {
    console.log(this.json);
    this.setFormProperties()
  }

  form = new FormGroup({});
  model: any = {};
  fields: FormlyFieldConfig[] = [];


  // key: 'email',
  // type: 'input',
  // props: {
  //   label: 'Email address',
  //   placeholder: 'Enter email',
  //   required: true,
  // }

  setFormProperties() {

    this.json.forEach((data, index) => {
      this.fields.push({
        key: data.id,
        type: this.defineFormProperties(data.tipo, data.valorDefault),
        defaultValue: this.value,
        props: {
          label: data.nombre,
          required: data.requerida
        }
      })
      if (this.haveSubtype) {
        this.fields[index].props.type = this.subtypeForm
      }
      if (this.isMultiSelect) {
        this.fields[index].props.multiple = true
      }
      if (data.validadorNumerico) {
        this.fields[index].props.min = data.validadorNumerico.minimo
        this.fields[index].props.max = data.validadorNumerico.maximo
      }
      if (data.tipo.includes('Lista')) {
        this.selectOptions = []
        let sortedOptionsArray = data.lista.elementos.sort((a, b) => (a.posicion > b.posicion) ? 1 : (a.posicion < b.posicion) ? -1 : 0)
        sortedOptionsArray.forEach(element => { this.selectOptions.push({ value: element.valor, label: element.nombre }) })
        this.fields[index].props.options = this.selectOptions
      }
    })
  }


  defineFormProperties(type: string, defaultValue: string) {
    let formType: string = ''
    this.subtypeForm = ''
    this.haveSubtype = false
    this.isMultiSelect = false
    this.value = ''
    switch (type) {
      case 'Logico':
        formType = 'checkbox'
        this.value = defaultValue == 'true' ? true : false
        break;
      case 'ListaSeleccionSimple':
        formType = 'select'
        this.value = defaultValue
        break;
      case 'Fecha':
        formType = 'input'
        this.subtypeForm = 'date'
        this.haveSubtype = true
        this.value = new Date(defaultValue.split('T')[0].replace('"', '')).toDateString()
        break;
      case 'FechaHora':
        formType = 'input'
        this.subtypeForm = 'datetime-local'
        this.haveSubtype = true
        this.value = defaultValue
        break;
      case 'Decimal':
        formType = 'number'
        this.value = defaultValue
        break;
      case 'Entero':
        formType = 'number'
        this.value = defaultValue
        break;
      case 'Hora':
        formType = 'input'
        this.subtypeForm = 'time'
        this.haveSubtype = true
        this.value = defaultValue
        break;
      case 'ListaSeleccionMultiple':
        formType = 'select'
        this.isMultiSelect = true
        this.value = defaultValue
        break;
      case 'Texto':
        formType = 'input'
        this.value = defaultValue
        break;
      case 'TextoIndexado':
        formType = 'textarea'
        this.value = defaultValue
        break;
    }
    return formType
  }

  onSubmit(model) {
    console.log(model);
  }

}

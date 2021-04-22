import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';
import { AngularFireDatabase } from '@angular/fire/database';
import jsPDF from 'jspdf';
import { validateRequired } from './app.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title: string;
  form :FormGroup;
  options: FormlyFormOptions 
  model: any;

  fields: FormlyFieldConfig[];

  constructor(public db: AngularFireDatabase) {
    this.title='FORMULARIO de Inscripción en el Registro Provincial de Capacitadores';
    this.form = new FormGroup({});
    this.model  = {};
    this.fields  = [
      {
        className: 'datos-identificacion',
        template: '<div class="coltit"><h2 style="color:#53aae0;">Identificacion territorial:</h2></div>',
      },
  
  
      // EMPRESA
      {
        key: 'Identificación territorial',
        type: 'no repeat',
        templateOptions: {
          addText: 'Ingresar datos de la identificación territorial',
        },
        fieldArray: {
          fieldGroup: [
  
            {
              key: 'Localidad',
              type: 'input',
              templateOptions: {
                label: 'Localidad',
                placeholder: 'Ingrese una localidad',
                required: true
              }
            },
            {
              key: 'Barrio',
              type: 'select',
              templateOptions: {
                label: 'Barrio',
                options: [
                  { value: '1', label: '1 DE MAYO' },
                  { value: '2', label: '1RA. JUNTA' },
                  { value: '3', label: '20 DE JUNIO' },
                  { value: '4', label: '23 DE ABRIL' },
                  { value: '5', label: '25 DE MAYO' },
                  { value: '6', label: '28 DE NOVIEMBRE' },
                  { value: '7', label: '4 DE FEBRERO' },
                  { value: '8', label: '6 DE AGOSTO' },
                  { value: '9', label: 'A.T. E.' },
                  { value: '10', label: 'ACHAVAL PEÑA' },
                  { value: '11', label: 'ACOSTA' },
                  { value: '12', label: 'AERONAUTICO' },
                  { value: '13', label: 'AEROPUERTO' },
                  { value: '14', label: 'AGENCIA CORDOBA SOLIDARIA' },
                  { value: '15', label: 'AIRES DEL SUR' },
                  { value: '16', label: 'ALBERDI' },
                  { value: '17', label: 'ALBORADA (N)' },
                  { value: '18', label: 'ALBORADA (S)' },
                  { value: '19', label: 'ALEJANDRO CENTENO' },
                  { value: '20', label: 'ALMIRANTE BROWN' },
                  { value: '21', label: 'ALTA CORDOBA' },
                  { value: '22', label: 'ALTAMIRA' },
                  { value: '23', label: 'ALTO ALBERDI' },
                  { value: '24', label: 'ALTO DE DON BOSCO' },
                  { value: '25', label: 'ALTO HERMOSO' },
                  { value: '26', label: 'ALTO PALERMO' },
                  { value: '27', label: 'ALTO VERDE' },
                  { value: '28', label: 'ALTOS DE MANANTIALES' },
                  { value: '29', label: 'ALTOS DE SANTA ANA' },
                  { value: '30', label: 'ALTOS DE VELEZ SARSFIELD' },
                  { value: '31', label: 'ALTOS DE VILLA CABRERA' },
                  { value: '32', label: 'ALTOS SAN MARTIN' },
                  { value: '33', label: 'ALTOS SUD DE SAN VICENTE' },
                  { value: '34', label: 'AMEGHINO NORTE' },
                  { value: '35', label: 'AMEGHINO SUD' },
                  { value: '36', label: 'AMPLIACION 1 DE MAYO' },
                  { value: '37', label: 'AMPLIACION ALTAMIRA' },
                  { value: '38', label: 'AMPLIACION BENJAMIN MATIENZO' },
                  { value: '39', label: 'AMPLIACION EMPALME' },
                  { value: '40', label: 'AMPLIACION FARINA' },
                  { value: '41', label: 'AMPLIACION GENERAL ARTIGAS' },
                  { value: '42', label: 'AMPLIACION JARDIN ESPINOSA' },
                  { value: '43', label: 'AMPLIACION KENNEDY' },
                  { value: '44', label: 'AMPLIACIÓN LAMADRID' },
                  { value: '45', label: 'AMPLIACION LAS PALMAS' },
                  { value: '46', label: 'AMPLIACION LOS ALAMOS' },
                  { value: '47', label: 'AMPLIACION LOS PLATANOS' },
                  { value: '48', label: 'AMPLIACIÓN MARCOS SASTRE' },
                  { value: '49', label: 'AMPLIACION PALMAR' },
                  { value: '50', label: 'AMPLIACION PANAMERICANO' },
                  { value: '51', label: 'AMPLIACION POETA LUGONES' },
                  { value: '52', label: 'AMPLIACION PUEYRREDON' },
                  { value: '53', label: 'AMPLIACIÓN PUEYRREDÓN' },
                  { value: '54', label: 'AMPLIACION RESIDENCIAL AMERICA' },
                  { value: '55', label: 'AMPLIACION ROSEDAL' },
                  { value: '56', label: 'AMPLIACION SAN FERNANDO' },
                  { value: '57', label: 'AMPLIACION SAN PABLO' },
                  { value: '58', label: 'AMPLIACION URCA' },
                  { value: '59', label: 'AMPLIACION VELEZ SARSFIELD' },
                  { value: '60', label: 'ANA MARIA ZUMARAN' },
                  { value: '61', label: 'ANEXO LAS PALMAS' },
                  { value: '62', label: 'ANEXO PUEYRREDÓN' },
                  { value: '63', label: 'ANGELELI 2' },
                  { value: '64', label: 'APEADERO LA TABLADA' },
                  { value: '65', label: 'ARGUELLO' },
                  { value: '66', label: 'ARGUELLO NORTE' },
                  { value: '67', label: 'ARSENALES ANEXO' },
                  { value: '68', label: 'ARTURO CAPDEVILA' },
                  { value: '69', label: 'ASOCIACIÓN CIVIL 2 DE ABRIL' },
                  { value: '70', label: 'ATALAYA' },
                  { value: '71', label: 'AVENIDA' },
                  { value: '72', label: 'AYACUCHO' },
                  { value: '73', label: 'BAJADA DE PIEDRA' },
                  { value: '74', label: 'BAJADA SAN JOSÉ' },
                  { value: '75', label: 'BAJADA SAN ROQUE' },
                  { value: '76', label: 'BAJO GALAN' },
                  { value: '77', label: 'BAJO GENERAL PAZ' },
                  { value: '78', label: 'BAJO PALERMO' },
                  { value: '79', label: 'BAJO PUEYRREDÓN' },
                  { value: '80', label: 'BAJO VILLA BELGRANO' },
                  { value: '81', label: 'BAJO YAPEYÚ' },
                  { value: '82', label: 'BARRANCA YACO' },
                  { value: '83', label: 'BARRANCAS DEL SUR' },
                  { value: '84', label: 'BARRIO ANGELLELI' },
                  { value: '85', label: 'BARRIO CABILDO' },
                  { value: '86', label: 'BARRIO COMERCIAL' },
                  { value: '87', label: 'BARRIO FERREYRA' },
                  { value: '88', label: 'BARRIO GENERAL MOSCONI' },
                  { value: '89', label: 'BARRIO JOSÉ IGNACIO DÍAZ' },
                  { value: '90', label: 'BARRIO JOSÉ IGNACIO DÍAZ 1' },
                  { value: '91', label: 'BARRIO MALDONADO' },
                  { value: '92', label: 'BARRIO MULLER' },
                  { value: '93', label: 'BARRIO PARQUE DEL ESTE' },
                  { value: '94', label: 'BARRIO SAN ALBERTO' },
                  { value: '95', label: 'BARRIO SAN JORGE' },
                  { value: '96', label: 'BELLA VISTA' },
                  { value: '97', label: 'BELLA VISTA OESTE' },
                  { value: '98', label: 'BENJAMIN POLICARPIO CABRAL' },
                  { value: '99', label: 'BETANIA' },
                  { value: '100', label: 'BIALET MASSE' },
                  { value: '101', label: 'BOEDO' },
                  { value: '102', label: 'BRIGADIER SAN MARTIN' },
                  { value: '103', label: 'CABAÑA DEL PILAR' },
                  { value: '104', label: 'CABO FARINA' },
                  { value: '105', label: 'CACERES' },
                  { value: '106', label: 'CALIFORNIA' },
                  { value: '107', label: 'CAMINO A 60 CUADRAS' },
                  { value: '108', label: 'CAMINO A SAN CARLOS' },
                  { value: '109', label: 'CAMINO A SANTA BÁRBARA' },
                  { value: '110', label: 'CAMINO A VILLA POSE' },
                  { value: '111', label: 'CAMINO SAN ANDRÉS' },
                  { value: '112', label: 'CAMPAMENTO FERROVIARIO' },
                  { value: '113', label: 'CAMPO DE LA RIBERA' },
                  { value: '114', label: 'CANAL DE LAS CASCADAS' },
                  { value: '115', label: 'CAÑADA DEL MANANTIAL ZONA SUR' },
                  { value: '116', label: 'CARBO' },
                  { value: '117', label: 'CAROLA LORENZINI' },
                  { value: '118', label: 'CARRARA' },
                  { value: '119', label: 'CASEROS' },
                  { value: '120', label: 'CENTRO' },
                  { value: '121', label: 'CENTRO AMERICA' },
                  { value: '122', label: 'CERRO CHICO' },
                  { value: '123', label: 'CERRO DE LAS ROSAS' },
                  { value: '124', label: 'CERRO NORTE' },
                  { value: '125', label: 'CERVECEROS' },
                  { value: '126', label: 'CHACRA DE LA MERCED 1' },
                  { value: '127', label: 'CHACRA DE LA MERCED 2' },
                  { value: '128', label: 'CHACRA DE LA MERCED 3' },
                  { value: '129', label: 'CHATEAU CARRERAS' },
                  { value: '130', label: 'CHATEAU LOS ROBLES' },
                  { value: '131', label: 'CIUDAD DE JUAN PABLO II' },
                  { value: '132', label: 'CIUDAD DE LOS CUARTETOS' },
                  { value: '133', label: 'CIUDAD DE LOS NIÑOS' },
                  { value: '134', label: 'CIUDAD DE MIS SUEÑOS' },
                  { value: '135', label: 'CIUDAD EVITA' },
                  { value: '136', label: 'CIUDAD OBISPO ANGELELLI' },
                  { value: '137', label: 'CIUDAD OCULTA' },
                  { value: '138', label: 'CIUDADELA' },
                  { value: '139', label: 'CLAROS DEL BOSQUE' },
                  { value: '140', label: 'CO.VI.CO.' },
                  { value: '141', label: 'COFICO' },
                  { value: '142', label: 'COLINAS DE BELLA VISTA' },
                  { value: '143', label: 'COLINAS DE VELEZ SARSFIELD' },
                  { value: '144', label: 'COLINAS DEL CERRO' },
                  { value: '145', label: 'COLON' },
                  { value: '146', label: 'COLONIA LOLA' },
                  { value: '147', label: 'COMANDANTE ESPORA' },
                  { value: '148', label: 'COMERCIAL' },
                  { value: '149', label: 'COMPLEJO YAPEYÚ' },
                  { value: '150', label: 'COMUNIDAD MARTA JUANA GONZALES' },
                  { value: '151', label: 'COMUNIDAD RENO' },
                  { value: '152', label: 'CONGRESO' },
                  { value: '153', label: 'CONSORCIO 16 DE NOVIEMBRE' },
                  { value: '154', label: 'CONSORCIO ESPERANZA' },
                  { value: '155', label: 'COOPERATIVA 16 DE NOVIEMBRE' },
                  { value: '156', label: 'COOPERATIVA LA UNIDAD' },
                  { value: '157', label: 'COOPERATIVA LOS MANANTIALES' },
                  { value: '158', label: 'COOPERATIVA RENACIMIENTO' },
                  { value: '159', label: 'CORRAL DE PALOS' },
                  { value: '160', label: 'COSTA CANAL 3' },
                  { value: '161', label: 'COSTA CAÑADA' },
                  { value: '162', label: 'COUNTRY ALTOS DEL CHATEAU' },
                  { value: '163', label: 'COUNTRY BARRANCAS' },
                  { value: '164', label: 'COUNTRY CLUB' },
                  { value: '165', label: 'COUNTRY COSTA VERDE' },
                  { value: '166', label: 'COUNTRY JOCKEY CLUB' },
                  { value: '167', label: 'COUNTRY LAS DELICIAS' },
                  { value: '168', label: 'COUNTRY LOMAS DE LA CAROLINA' },
                  { value: '169', label: 'COUNTRY LOS ALGARROBOS' },
                  { value: '170', label: 'COUNTRY RANCH CLUB' },
                  { value: '171', label: 'CRISOL NORTE' },
                  { value: '172', label: 'CRISOL SUD' },
                  { value: '173', label: 'CUPANI' },
                  { value: '174', label: 'DEAN FUNES' },
                  { value: '175', label: 'DOCE DE JULIO' },
                  { value: '176', label: 'DOCE DE SEPTIEMBRE' },
                  { value: '177', label: 'DR REMO M. COPELLO' },
                  { value: '178', label: 'DR RENE FAVALORO' },
                  { value: '179', label: 'DUCASSE' },
                  { value: '180', label: 'EJERCITO ARGENTINO' },
                  { value: '181', label: 'EL BALCON' },
                  { value: '182', label: 'EL BORDO' },
                  { value: '183', label: 'EL BOSQUE' },
                  { value: '184', label: 'EL CABILDO' },
                  { value: '185', label: 'EL CERRITO' },
                  { value: '186', label: 'EL CHAPARRAL' },
                  { value: '187', label: 'EL DORADO' },
                  { value: '188', label: 'EL MARQUES DE SOBREMONTE' },
                  { value: '189', label: 'EL MILAGRO SECC 10' },
                  { value: '190', label: 'EL MILAGRO SECC 5' },
                  { value: '191', label: 'EL NYLON' },
                  { value: '192', label: 'EL OBRADOR' },
                  { value: '193', label: 'EL PUEBLITO' },
                  { value: '194', label: 'EL QUEBRACHAL' },
                  { value: '195', label: 'EL QUEBRACHO' },
                  { value: '196', label: 'EL REFUGIO' },
                  { value: '197', label: 'EL ROCIO Y LAS CIGARRAS' },
                  { value: '198', label: 'EL SAUCE' },
                  { value: '199', label: 'EL TINGLADO' },
                  { value: '200', label: 'EL TREBOL' },
                  { value: '201', label: 'EL TRENCITO' },
                  { value: '202', label: 'EL TRIUNFO' },
                  { value: '203', label: 'EL TROPEZÓN' },
                  { value: '204', label: 'EL VIEJO ALGARROBO' },
                  { value: '205', label: 'EMAUS' },
                  { value: '206', label: 'EMPALME' },
                  { value: '207', label: 'EMPALME CASAS DE OBREROS Y EMPLEADOS' },
                  { value: '208', label: 'ESCOBAR' },
                  { value: '209', label: 'ESTACION FLORES' },
                  { value: '210', label: 'FELIPE VARELA' },
                  { value: '211', label: 'FERRER' },
                  { value: '212', label: 'FERREYRA' },
                  { value: '213', label: 'FERREYRA SEGUNDA SECCION' },
                  { value: '214', label: 'FERROVIARIO  MITRE' },
                  { value: '215', label: 'FINCA LA DOROTEA' },
                  { value: '216', label: 'FINCAS DEL SUR' },
                  { value: '217', label: 'GENERAL ARENALES' },
                  { value: '218', label: 'GENERAL ARTIGAS' },
                  { value: '219', label: 'GENERAL BELGRANO' },
                  { value: '220', label: 'GENERAL BUSTOS' },
                  { value: '221', label: 'GENERAL MOSCONI' },
                  { value: '222', label: 'GENERAL PAZ' },
                  { value: '223', label: 'GENERAL PUEYRREDON' },
                  { value: '224', label: 'GENERAL SAVIO' },
                  { value: '225', label: 'GRANADERO PRINGLES' },
                  { value: '226', label: 'GRANJA DE FUNES' },
                  { value: '227', label: 'GUARNICION AREA CBA' },
                  { value: '228', label: 'GUARNICION MILITAR CBA' },
                  { value: '229', label: 'GUAYAQUIL' },
                  { value: '230', label: 'GUEMES' },
                  { value: '231', label: 'GUIÑAZU' },
                  { value: '232', label: 'GUIÑAZU SUD' },
                  { value: '233', label: 'HERMANA SIERRA' },
                  { value: '234', label: 'HIPOLITO IRIGOYEN' },
                  { value: '235', label: 'HOGAR PROPIO' },
                  { value: '236', label: 'HORIZONTE' },
                  { value: '237', label: 'INAUDI' },
                  { value: '238', label: 'INDEPENDENCIA' },
                  { value: '239', label: 'INDUSTRIAL ESTE' },
                  { value: '240', label: 'INDUSTRIAL OESTE' },
                  { value: '241', label: 'IPONA' },
                  { value: '242', label: 'IRUPE' },
                  { value: '243', label: 'ITUZAINGO' },
                  { value: '244', label: 'ITUZAINGO ANEXO' },
                  { value: '245', label: 'ITUZAINGO II' },
                  { value: '246', label: 'JARDIN' },
                  { value: '247', label: 'JARDIN DEL PILAR' },
                  { value: '248', label: 'JARDIN DEL SUD' },
                  { value: '249', label: 'JARDIN ESPINOSA' },
                  { value: '250', label: 'JARDIN HIPODROMO' },
                  { value: '251', label: 'JARDINES DEL JOCKEY' },
                  { value: '252', label: 'JERONIMO LUIS DE CABRERA' },
                  { value: '253', label: 'JOCKEY CLUB' },
                  { value: '254', label: 'JOISON' },
                  { value: '255', label: 'JOSE HERNANDEZ' },
                  { value: '256', label: 'JOSE IGNACIO DIAZ 1A SECCION' },
                  { value: '257', label: 'JOSE IGNACIO DIAZ 2A SECCION' },
                  { value: '258', label: 'JOSE IGNACIO DIAZ 3A SECCION' },
                  { value: '259', label: 'JOSE IGNACIO RUCCI' },
                  { value: '260', label: 'JOSE IGNACION DIAZ 3' },
                  { value: '261', label: 'JOVEN AMANECER' },
                  { value: '262', label: 'JUAN B. JUSTO' },
                  { value: '263', label: 'JUAN XXIII' },
                  { value: '264', label: 'JUNIORS' },
                  { value: '265', label: 'KAIROS' },
                  { value: '266', label: 'KENNEDY' },
                  { value: '267', label: 'KILÓMETRO 9 Y MEDIO' },
                  { value: '268', label: 'LA CANCHITA' },
                  { value: '269', label: 'LA CAROLINA' },
                  { value: '270', label: 'LA COSTA CANAL' },
                  { value: '271', label: 'LA ESPERANZA' },
                  { value: '272', label: 'LA FLORESTA' },
                  { value: '273', label: 'LA FRANCE' },
                  { value: '274', label: 'LA FRATERNIDAD' },
                  { value: '275', label: 'LA HORTENSIA' },
                  { value: '276', label: 'LA LONJA' },
                  { value: '277', label: 'LA MATERNIDAD' },
                  { value: '278', label: 'LA PASTORA' },
                  { value: '279', label: 'LA RESERVA' },
                  { value: '280', label: 'LA SALLE' },
                  { value: '281', label: 'LA TOMA' },
                  { value: '282', label: 'LA TRIBU' },
                  { value: '283', label: 'LAMADRID' },
                  { value: '284', label: 'LAS CAÑITAS' },
                  { value: '285', label: 'LAS CAÑUELAS' },
                  { value: '286', label: 'LAS DALIAS' },
                  { value: '287', label: 'LAS DELICIAS' },
                  { value: '288', label: 'LAS FLORES' },
                  { value: '289', label: 'LAS GALPONES' },
                  { value: '290', label: 'LAS HUERTILLAS' },
                  { value: '291', label: 'LAS LILAS' },
                  { value: '292', label: 'LAS MAGNOLIAS' },
                  { value: '293', label: 'LAS MARGARITAS' },
                  { value: '294', label: 'LAS PALMAS' },
                  { value: '295', label: 'LAS PLAYAS' },
                  { value: '296', label: 'LAS ROSAS' },
                  { value: '297', label: 'LAS TABLITAS SECC 10' },
                  { value: '298', label: 'LAS TABLITAS SECC 5' },
                  { value: '299', label: 'LAS VIOLETAS' },
                  { value: '300', label: 'LICEO GENERAL PAZ' },
                  { value: '301', label: 'LOMAS DE SAN MARTIN' },
                  { value: '302', label: 'LOS 40 GUASOS' },
                  { value: '303', label: 'LOS 40 Y LA COSTA DE ARGÜELLO' },
                  { value: '304', label: 'LOS ALAMOS' },
                  { value: '305', label: 'LOS ANGELES' },
                  { value: '306', label: 'LOS ARBOLES' },
                  { value: '307', label: 'LOS ARTESANOS' },
                  { value: '308', label: 'LOS BOULEVARES' },
                  { value: '309', label: 'LOS CEIBOS' },
                  { value: '310', label: 'LOS CHINGOLOS' },
                  { value: '311', label: 'LOS CIELOS' },
                  { value: '312', label: 'LOS CORTADEROS' },
                  { value: '313', label: 'LOS EUCALIPTUS' },
                  { value: '314', label: 'LOS FILTROS' },
                  { value: '315', label: 'LOS FRESNOS' },
                  { value: '316', label: 'LOS GIGANTES' },
                  { value: '317', label: 'LOS GRANADOS' },
                  { value: '318', label: 'LOS HORNILLOS' },
                  { value: '319', label: 'LOS JACARANDAES' },
                  { value: '320', label: 'LOS JOSEFINOS' },
                  { value: '321', label: 'LOS NARANJOS' },
                  { value: '322', label: 'LOS OLMOS' },
                  { value: '323', label: 'LOS OLMOS SUD' },
                  { value: '324', label: 'LOS PARAISOS' },
                  { value: '325', label: 'LOS PINOS' },
                  { value: '326', label: 'LOS PLATANOS' },
                  { value: '327', label: 'LOS ROBLES' },
                  { value: '328', label: 'LOS SAUCES' },
                  { value: '329', label: 'LOS SOLES' },
                  { value: '330', label: 'LOS SUEÑOS' },
                  { value: '331', label: 'LOURDES' },
                  { value: '332', label: 'MAIPU 1A SECCION' },
                  { value: '333', label: 'MAIPU 2A SECCION' },
                  { value: '334', label: 'MALDONADO' },
                  { value: '335', label: 'MANANTIALES I' },
                  { value: '336', label: 'MANANTIALES II' },
                  { value: '337', label: 'MARCELO T. DE ALVEAR' },
                  { value: '338', label: 'MARCOS SASTRE' },
                  { value: '339', label: 'MARECHAL' },
                  { value: '340', label: 'MARIA LASTENIA' },
                  { value: '341', label: 'MARIANO BALCARCE' },
                  { value: '342', label: 'MARIANO FRAGUEIRO' },
                  { value: '343', label: 'MARQUES DE SOBREMONTE' },
                  { value: '344', label: 'MAULLER' },
                  { value: '345', label: 'MAURIZI' },
                  { value: '346', label: 'MERCANTIL' },
                  { value: '347', label: 'MILITAR GENERAL DEHEZA' },
                  { value: '348', label: 'MIRADOR' },
                  { value: '349', label: 'MIRADOR DEL CHATEAU' },
                  { value: '350', label: 'MIRALTA' },
                  { value: '351', label: 'MIRALTA 2' },
                  { value: '352', label: 'MIRIZI' },
                  { value: '353', label: 'MUTUAL DE LOS DOCENTES' },
                  { value: '354', label: 'NICOLAS AVELLANEDA' },
                  { value: '355', label: 'NUESTRO HOGAR 3' },
                  { value: '356', label: 'NUEVA CORDOBA' },
                  { value: '357', label: 'NUEVA CORDOBA ANEXA' },
                  { value: '358', label: 'NUEVA ESPERANZA' },
                  { value: '359', label: 'NUEVA ITALIA' },
                  { value: '360', label: 'NUEVO PROGRESO' },
                  { value: '361', label: 'NUEVO URCA' },
                  { value: '362', label: 'O.S.N.' },
                  { value: '363', label: 'OBRERO' },
                  { value: '364', label: 'OBSERVATORIO' },
                  { value: '365', label: 'OBSERVATORIO LA BOMBA' },
                  { value: '366', label: 'OMBU' },
                  { value: '367', label: 'OÑA' },
                  { value: '368', label: 'PADRE CLARET' },
                  { value: '369', label: 'PALMAR' },
                  { value: '370', label: 'PANAMERICANO' },
                  { value: '371', label: 'PARQUE ALAMEDA' },
                  { value: '372', label: 'PARQUE ATLANTICA' },
                  { value: '373', label: 'PARQUE CAPITAL' },
                  { value: '374', label: 'PARQUE CAPITAL SUR' },
                  { value: '375', label: 'PARQUE CHACABUCO' },
                  { value: '376', label: 'PARQUE CHATEAU CARRERAS' },
                  { value: '377', label: 'PARQUE COREMA' },
                  { value: '378', label: 'PARQUE DEL ESTE' },
                  { value: '379', label: 'PARQUE DON BOSCO' },
                  { value: '380', label: 'PARQUE FUTURA' },
                  { value: '381', label: 'PARQUE ITUZAINGÓ 2' },
                  { value: '382', label: 'PARQUE JORGE NEWBERY' },
                  { value: '383', label: 'PARQUE LAS ROSAS' },
                  { value: '384', label: 'PARQUE LATINO' },
                  { value: '385', label: 'PARQUE LICEO 1A SECCION' },
                  { value: '386', label: 'PARQUE LICEO 2A SECCION' },
                  { value: '387', label: 'PARQUE LICEO 3A SECCION' },
                  { value: '388', label: 'PARQUE LICEO SECCION 1' },
                  { value: '389', label: 'PARQUE LICEO SEGUNDA SECCIÓN' },
                  { value: '390', label: 'PARQUE LOS MOLINOS' },
                  { value: '391', label: 'PARQUE MODELO' },
                  { value: '392', label: 'PARQUE MONTECRISTO' },
                  { value: '393', label: 'PARQUE REPUBLICA' },
                  { value: '394', label: 'PARQUE SAN CARLOS' },
                  { value: '395', label: 'PARQUE SAN VICENTE' },
                  { value: '396', label: 'PARQUE TABLADA' },
                  { value: '397', label: 'PARQUE VELEZ SARSFIELD' },
                  { value: '398', label: 'PASO DE LOS ANDES' },
                  { value: '399', label: 'PATRIA' },
                  { value: '400', label: 'PATRICIOS' },
                  { value: '401', label: 'PATRICIOS ESTE' },
                  { value: '402', label: 'PATRICIOS NORTE' },
                  { value: '403', label: 'PATRICIOS OESTE' },
                  { value: '404', label: 'PIEDRAS BLANCAS' },
                  { value: '405', label: 'POETA LUGONES' },
                  { value: '406', label: 'POLICIAL' },
                  { value: '407', label: 'PORTAL DE CORDOBA' },
                  { value: '408', label: 'PORTAL DEL JACARANDA' },
                  { value: '409', label: 'POSTA DE VARGAS' },
                  { value: '410', label: 'PROVIDENCIA' },
                  { value: '411', label: 'PUEBLOS LIBRES' },
                  { value: '412', label: 'PUEBLOS UNIDOS' },
                  { value: '413', label: 'PUENTE BLANCO' },
                  { value: '414', label: 'QUEBRADA DE LAS ROSAS' },
                  { value: '415', label: 'QUINTA SANTA ANA' },
                  { value: '416', label: 'QUINTAS DE ARGUELLO' },
                  { value: '417', label: 'QUINTAS DE FLORES' },
                  { value: '418', label: 'QUINTAS DE ITALIA' },
                  { value: '419', label: 'QUINTAS DE SAN JORGE' },
                  { value: '420', label: 'RAMON J CARCANO' },
                  { value: '421', label: 'RAMON J. CARCANO' },
                  { value: '422', label: 'RECREO DEL NORTE' },
                  { value: '423', label: 'REMEDIOS DE ESCALADA' },
                  { value: '424', label: 'RENACIMIENTO' },
                  { value: '425', label: 'RENE FAVALORO SUD' },
                  { value: '426', label: 'RESIDENCIA SAN ROQUE' },
                  { value: '427', label: 'RESIDENCIAL AMERICA' },
                  { value: '428', label: 'RESIDENCIAL ARAGON' },
                  { value: '429', label: 'RESIDENCIAL OLIVOS' },
                  { value: '430', label: 'RESIDENCIAL SAN CARLOS' },
                  { value: '431', label: 'RESIDENCIAL SAN JORGE' },
                  { value: '432', label: 'RESIDENCIAL SAN ROQUE' },
                  { value: '433', label: 'RESIDENCIAL SUD' },
                  { value: '434', label: 'RESIDENCIAL VELEZ SARSFIELD' },
                  { value: '435', label: 'RIVADAVIA' },
                  { value: '436', label: 'RIVERA INDARTE' },
                  { value: '437', label: 'ROCIO DEL SUR' },
                  { value: '438', label: 'ROGELIO MARTINEZ' },
                  { value: '439', label: 'ROSEDAL' },
                  { value: '440', label: 'S.E.P.' },
                  { value: '441', label: 'SACCHI' },
                  { value: '442', label: 'SAN ANTONIO' },
                  { value: '443', label: 'SAN CAYETANO' },
                  { value: '444', label: 'SAN DANIEL' },
                  { value: '445', label: 'SAN FELIPE' },
                  { value: '446', label: 'SAN FERNANDO' },
                  { value: '447', label: 'SAN FRANCISCO' },
                  { value: '448', label: 'SAN IGNACIO' },
                  { value: '449', label: 'SAN JAVIER' },
                  { value: '450', label: 'SAN JOSE' },
                  { value: '451', label: 'SAN LORENZO' },
                  { value: '452', label: 'SAN LORENZO (S)' },
                  { value: '453', label: 'SAN LORENZO NORTE' },
                  { value: '454', label: 'SAN LUIS DE FRANCIA' },
                  { value: '455', label: 'SAN MARCELO' },
                  { value: '456', label: 'SAN MARTIN' },
                  { value: '457', label: 'SAN MARTÍN' },
                  { value: '458', label: 'SAN MARTIN ANEXO' },
                  { value: '459', label: 'SAN MARTIN NORTE' },
                  { value: '460', label: 'SAN NICOLAS' },
                  { value: '461', label: 'SAN PABLO' },
                  { value: '462', label: 'SAN PEDRO NOLASCO' },
                  { value: '463', label: 'SAN RAFAEL' },
                  { value: '464', label: 'SAN RAMON' },
                  { value: '465', label: 'SAN SALVADOR' },
                  { value: '466', label: 'SAN VICENTE' },
                  { value: '467', label: 'SANTA ANA RESIDENCIAL' },
                  { value: '468', label: 'SANTA CECILIA' },
                  { value: '469', label: 'SANTA CLARA DE ASIS' },
                  { value: '470', label: 'SANTA ISABEL 1A SECCION' },
                  { value: '471', label: 'SANTA ISABEL 2A SECCION' },
                  { value: '472', label: 'SANTA ISABEL 3A SECCION' },
                  { value: '473', label: 'SANTA RITA' },
                  { value: '474', label: 'SANTA ROSA RESIDENCIAL' },
                  { value: '475', label: 'SARGENTO CABRAL' },
                  { value: '476', label: 'SARMIENTO' },
                  { value: '477', label: 'SEP SEGUNDA ETAPA' },
                  { value: '478', label: 'SIN DESIGNACION' },
                  { value: '479', label: 'SMATA' },
                  { value: '480', label: 'SOLARES DE SANTA MARIA' },
                  { value: '481', label: 'SUAREZ' },
                  { value: '482', label: 'TABLADA PARK' },
                  { value: '483', label: 'TALLERES (E)' },
                  { value: '484', label: 'TALLERES (O)' },
                  { value: '485', label: 'TALLERES SUD' },
                  { value: '486', label: 'TEJAS DE LA CANDELARIA' },
                  { value: '487', label: 'TEJAS DEL SUR' },
                  { value: '488', label: 'TEODORO FELS' },
                  { value: '489', label: 'TRANVIARIOS' },
                  { value: '490', label: 'TTE. BENJAMIN MATIENZO' },
                  { value: '491', label: 'U.O.C.R.A.' },
                  { value: '492', label: 'URCA' },
                  { value: '493', label: 'URITORCO' },
                  { value: '494', label: 'URQUIZA' },
                  { value: '495', label: 'V.I.C.O.R.' },
                  { value: '496', label: 'VALLE CERCANO' },
                  { value: '497', label: 'VALLE DEL CERRO' },
                  { value: '498', label: 'VALLE ESCONDIDO' },
                  { value: '499', label: 'VASQUEZ' },
                  { value: '500', label: 'VILLA 27 DE ABRIL' },
                  { value: '501', label: 'VILLA 9 DE JULIO' },
                  { value: '502', label: 'VILLA ABALOS' },
                  { value: '503', label: 'VILLA ADELA' },
                  { value: '504', label: 'VILLA ALBERDI' },
                  { value: '505', label: 'VILLA ALBERTO' },
                  { value: '506', label: 'VILLA ALBERTO ANEXO' },
                  { value: '507', label: 'VILLA ALICIA RISLER' },
                  { value: '508', label: 'VILLA ALLENDE PARQUE' },
                  { value: '509', label: 'VILLA ARGENTINA' },
                  { value: '510', label: 'VILLA ASPASIA' },
                  { value: '511', label: 'VILLA AVALOS' },
                  { value: '512', label: 'VILLA ÁVALOS' },
                  { value: '513', label: 'VILLA AZALAIZ' },
                  { value: '514', label: 'VILLA AZALAIZ OESTE' },
                  { value: '515', label: 'VILLA BELGRANO' },
                  { value: '516', label: 'VILLA BUSTOS' },
                  { value: '517', label: 'VILLA CABRERA' },
                  { value: '518', label: 'VILLA CAPULLO' },
                  { value: '519', label: 'VILLA CENTENARIO' },
                  { value: '520', label: 'VILLA CLARET' },
                  { value: '521', label: 'VILLA CLAUDINA' },
                  { value: '522', label: 'VILLA CORINA' },
                  { value: '523', label: 'VILLA CORNU' },
                  { value: '524', label: 'VILLA CORONEL OLMEDO' },
                  { value: '525', label: 'VILLA DE MAFEKIN' },
                  { value: '526', label: 'VILLA DE OBRAS SANITARIAS' },
                  { value: '527', label: 'VILLA DE REMEDIOS DE ESCALADA' },
                  { value: '528', label: 'VILLA DEL PARQUE' },
                  { value: '529', label: 'VILLA DERNA' },
                  { value: '530', label: 'VILLA EL LIBERTADOR' },
                  { value: '531', label: 'VILLA EL PLATITO' },
                  { value: '532', label: 'VILLA ESQUIU' },
                  { value: '533', label: 'VILLA EUCARISTICA' },
                  { value: '534', label: 'VILLA GENERAL URQUIZA' },
                  { value: '535', label: 'VILLA GRAN PARQUE' },
                  { value: '536', label: 'VILLA HERMOSA' },
                  { value: '537', label: 'VILLA INÉS' },
                  { value: '538', label: 'VILLA LA TABLA' },
                  { value: '539', label: 'VILLA LA TELA' },
                  { value: '540', label: 'VILLA LA VAQUITA ECHADA' },
                  { value: '541', label: 'VILLA LOS CHAPONES' },
                  { value: '542', label: 'VILLA MAFEKIN' },
                  { value: '543', label: 'VILLA MARTA' },
                  { value: '544', label: 'VILLA MARTINEZ' },
                  { value: '545', label: 'VILLA MARTÍNEZ' },
                  { value: '546', label: 'VILLA PAEZ' },
                  { value: '547', label: 'VILLA PIGÜE' },
                  { value: '548', label: 'VILLA QUISQUIZACATE' },
                  { value: '549', label: 'VILLA RETIRO' },
                  { value: '550', label: 'VILLA REVOL' },
                  { value: '551', label: 'VILLA REVOL ANEXO' },
                  { value: '552', label: 'VILLA RIVADAVIA ANEXO "A"' },
                  { value: '553', label: 'VILLA RIVADAVIA ANEXO A' },
                  { value: '554', label: 'VILLA RIVERA INDARTE' },
                  { value: '555', label: 'VILLA SALDAN' },
                  { value: '556', label: 'VILLA SAN CARLOS' },
                  { value: '557', label: 'VILLA SAN ISIDRO' },
                  { value: '558', label: 'VILLA SERRANA' },
                  { value: '559', label: 'VILLA SIBURU' },
                  { value: '560', label: 'VILLA SILVANO FUNES' },
                  { value: '561', label: 'VILLA SOLFERINO' },
                  { value: '562', label: 'VILLA UNION' },
                  { value: '563', label: 'VILLA UNIÓN' },
                  { value: '564', label: 'VILLA URQUIZA' },
                  { value: '565', label: 'VILLA WARCALDE' },
                  { value: '566', label: 'VILLA ZEPPELIN' },
                  { value: '567', label: 'VILLAS LAS INESITAS' },
                  { value: '568', label: 'VILLITA DEL LADO DE ECOGAS' },
                  { value: '569', label: 'VIVERO NORTE' },
                  { value: '570', label: 'YAPEYU' },
                  { value: '571', label: 'YOFRE H' },
                  { value: '572', label: 'YOFRE I' },
                  { value: '573', label: 'YOFRE NORTE' },
                  { value: '574', label: 'YOFRE SUD' },
                  { value: '575', label: 'ZEPA' },
                ],
                required: true
              }
            },
            {
              template: 'Ubicación'
            },
            {
              key: 'Manzana',
              type: 'input',
              templateOptions: {
                label: 'Manzana',
                placeholder: 'Igrese una manzana',
              }
            },
            {
              key: 'Lote',
              type: 'input',
              templateOptions: {
                label: 'Lote',
                placeholder: 'Igrese un lote',
              }
            },
            {
              key: 'Domicilio',
              type: 'input',
              templateOptions: {
                label: 'Domicilio',
                placeholder: 'Igrese un domicilio',
                required: true
              }
            },
            {
              key: 'Indicaciónes de referencias',
              type: 'input',
              templateOptions: {
                label: 'Indicaciónes de referencias',
                placeholder: 'Entre calles; Avenidas; Edificios públicos; Locales comerciales conocidos',
              }
            },
          ]
        }
      },
      //---------------------------------------------------------------------------------------------------------------------------------------------------------------------
      {
        className: 'datos-entrevista',
        template: '<div class="coltit"><h2 style="color:#53aae0;">Entrevista:</h2></div>',
      },
  
      {
        key: 'Entrevista',
        type: 'no repeat',
        templateOptions: {
          addText: 'Ingresar datos de la entrevista',
        },
        fieldArray: {
          fieldGroup: [
            {
              key: 'realiza_entrevista',
              type: 'select',
              defaultValue: 'Si',
              templateOptions: {
                label: 'Realiza la entrevista',
                options: [
                  { value: 'Si', label: 'Si' },
                  { value: 'No', label: 'No' },
                ]
              }
            },
            {
              key: 'Motivo',
              type: 'select',
              templateOptions: {
                label: 'Motivo',
                required: true,
                options: [
                  { value: 'Ausente', label: 'Ausente' },
                  { value: 'Rechazo', label: 'Rechazo' },
                  { value: 'Vivienda vacía', label: 'Vivienda vacía' },
                  { value: 'Lote o baldío', label: 'Lote o baldío' },
                  { value: 'Vivienda en construcción', label: 'Vivienda en construcción' },
                  { value: 'Local comercial', label: 'Local comercial' },
                ]
              },
              expressionProperties: {
                hide: 'model.realiza_entrevista == "Si"',
                show: 'model.realiza_entrevista == "No"',
              }
            },
            {
              key: 'Observación',
              type: 'input',
              templateOptions: {
                label: 'Observación',
                placeholder: 'Igrese una observación',
              },
              expressionProperties: {
                hide: 'model.realiza_entrevista == "Si"',
                show: 'model.realiza_entrevista == "No"',
              }
            },
            {
              key: 'Nombre del entrevistador',
              type: 'input',
              templateOptions: {
                label: 'Nombre del entrevistador',
                placeholder: 'Igrese un nombre',
  
              },
              expressionProperties: {
                hide: 'model.realiza_entrevista == "Si"',
                show: 'model.realiza_entrevista == "No"',
                'templateOptions.required': 'model.realiza_entrevista == "No"'
              }
            },
            {
              key: 'Teléfono del entrevistador',
              type: 'input',
              templateOptions: {
                label: 'Teléfono del entrevistador',
                placeholder: 'Igrese un teléfono',
                pattern: '\\d{7,25}'
              },
              expressionProperties: {
                hide: 'model.realiza_entrevista == "Si"',
                show: 'model.realiza_entrevista == "No"',
                'templateOptions.required': 'model.realiza_entrevista == "No"'
              }
            },
          ]
        }
      },
      //------------------------------------------------------------------------------------------------------------------------
      {
        className: 'datos-deteccion',
        template: '<div class="coltit"><h2 style="color:#53aae0;">Detección de viviendas en el lote:</h2></div>',
      },
  
      {
        key: 'Detección de vivienda en el lote',
        type: 'no repeat',
        templateOptions: {
          addText: 'Ingresar datos de la detección',
        },
        fieldArray: {
          fieldGroup: [
            {
              key: '¿Cuántas viviendas hay en el lote?',
              type: 'input',
              templateOptions: {
                type: 'number',
                label: '¿Cuántas viviendas hay en el lote?',
                placeholder: 'Igrese una cantidad',
                required: true,
              }
            },
          ]
        }
      },
      //------------------------------------------------------------------------------------------------------------------------
      {
        template: '<h2>Información del lote</h2>'
      },
      {
        key: 'Lote',
        type: 'no repeat',
        templateOptions: {
          addText: 'Ingresar lote',
        },
        fieldArray: {
          fieldGroup: [
            {
              key: '¿Que otro uso le da a la vivienda ademas de la habitacional?',
              type: 'select',
              templateOptions: {
                label: '¿Que otro uso le da a la vivienda ademas de la habitacional?',
                options: [
                  { value: 'Comunitario', label: 'Comunitario' },
                  { value: 'Comercial', label: 'Comercial' },
                  { value: 'Otro', label: 'Otro' },
                ]
              }
            },
            {
              template: '<h3>Situacion de los pozos absorventes</h3>'
            },
            {
              key: '¿Cantidad total de pozos?',
              type: 'input',
              templateOptions: {
                label: '¿Cantidad total de pozos?',
                placeholder: 'Ingrese una cantidad',
                type: 'number'
              }
            },
            {
              key: '¿Cantidad de pozos saturados?',
              type: 'input',
              templateOptions: {
                label: '¿Cantidad de pozos saturados?',
                placeholder: 'Ingrese una cantidad',
                type: 'number'
              }
            },
            {
              key: '¿Cantidad de pozos en uso?',
              type: 'input',
              templateOptions: {
                label: '¿Cantidad de pozos en uso?',
                placeholder: 'Ingrese una cantidad',
                type: 'number'
              }
            },
            {
              key: 'se_inunda_actualmente',
              type: 'select',
              templateOptions: {
                label: '¿Se inuda actualmente?',
                options: [
                  { value: 'Si', label: 'Si' },
                  { value: 'No', label: 'No' },
                ]
              }
            },
            {
              key: 'Frecuencia',
              type: 'input',
              templateOptions: {
                label: 'Frecuencia',
                placeholder: 'Ingrese una frecuencia en caso de ser Si',
              },
              expressionProperties: {
                hide: 'model.se_inunda_actualmente == "No"',
                show: 'model.se_inunda_actualmente == "Si"',
              }
            },
            {
              template: '<h3>Residuos domiciliarios</h3>'
            },
            {
              key: '¿Posee cesto domiciliario?',
              type: 'select',
              templateOptions: {
                label: '¿Posee cesto domiciliario?',
                options: [
                  { value: 'Si', label: 'Si' },
                  { value: 'No', label: 'No' },
                ]
              }
            },
            {
              key: 'cuenta_con_servicio_de_recoleccion',
              type: 'select',
              templateOptions: {
                label: '¿Cuenta con servicio de recolección?',
                options: [
                  { value: 'Si', label: 'Si' },
                  { value: 'No', label: 'No' },
                ]
              }
            },
            {
              key: '¿Que tipo de servicio?',
              type: 'input',
              templateOptions: {
                label: '¿Que tipo de servicio?',
                placeholder: 'Ingrese un tipo de servicio'
              },
              expressionProperties: {
                hide: 'model.cuenta_con_servicio_de_recoleccion == "No"',
                show: 'model.cuenta_con_servicio_de_recoleccion == "Si"',
              }
            },
            {
              template: '<h3>Transporte público</h3>'
            },
            {
              key: '¿Que lineas pasan?',
              type: 'select',
              templateOptions: {
                label: '¿Que lineas pasan?',
                multiple: true,
                options: [
                  { value: '10', label: '10' },
                  { value: '11', label: '11' },
                  { value: '12', label: '12' },
                  { value: '13', label: '13' },
                  { value: '14', label: '14' },
                  { value: '15', label: '15' },
                  { value: '16', label: '16' },
                  { value: '17', label: '17' },
                  { value: '18', label: '18' },
                  { value: '19', label: '19' },
                  { value: 'D10', label: 'D10' },
                  { value: '20', label: '20' },
                  { value: '21', label: '21' },
                  { value: '22', label: '22' },
                  { value: '23', label: '23' },
                  { value: '24', label: '24' },
                  { value: '25', label: '25' },
                  { value: '26', label: '26' },
                  { value: '27', label: '27' },
                  { value: '28', label: '28' },
                  { value: '29', label: '29' },
                  { value: 'B20', label: 'B20' },
                  { value: 'D20', label: 'D20' },
                  { value: '30', label: '30' },
                  { value: '31', label: '31' },
                  { value: '32', label: '32' },
                  { value: '33', label: '33' },
                  { value: '34', label: '34' },
                  { value: '35', label: '35' },
                  { value: '36', label: '36' },
                  { value: 'B30', label: 'B30' },
                  { value: 'B31', label: 'B31' },
                  { value: 'D30', label: 'D30' },
                  { value: '40', label: '40' },
                  { value: '41', label: '41' },
                  { value: '42', label: '42' },
                  { value: '43', label: '43' },
                  { value: '44', label: '44' },
                  { value: '45', label: '45' },
                  { value: '50', label: '50' },
                  { value: '51', label: '51' },
                  { value: '52', label: '52' },
                  { value: '53', label: '53' },
                  { value: '54', label: '54' },
                  { value: '55', label: '55' },
                  { value: 'D50', label: 'D50' },
                  { value: '60', label: '60' },
                  { value: '61', label: '61' },
                  { value: '62', label: '62' },
                  { value: '63', label: '63' },
                  { value: '64', label: '64' },
                  { value: '65', label: '65' },
                  { value: '66', label: '66' },
                  { value: '67', label: '67' },
                  { value: '68', label: '68' },
                  { value: 'B60', label: 'B60' },
                  { value: 'B61', label: 'B61' },
                  { value: '70', label: '70' },
                  { value: '71', label: '71' },
                  { value: '72', label: '72' },
                  { value: '73', label: '73' },
                  { value: '74', label: '74' },
                  { value: '75', label: '75' },
                  { value: 'B70', label: 'B70' },
                  { value: '80', label: '80' },
                  { value: '81', label: '81' },
                  { value: '82', label: '82' },
                  { value: '83', label: '83' },
                  { value: '84', label: '84' },
                  { value: '85', label: '85' },
                  { value: 'B80', label: 'B80' },
                  { value: 'D80', label: 'D80' },
                  { value: '500', label: '500' },
                  { value: '501', label: '501' },
                  { value: '600', label: '600' },
                  { value: '601', label: '601' },
                ]
              }
            },
            {
              key: '¿A cuantas cuadras está la parada más proxima?',
              type: 'input',
              templateOptions: {
                label: '¿A cuantas cuadras está la parada más proxima?',
                placeholder: 'Ingrese una cantidad',
                type: 'number'
              }
            },
            {
              key: 'Viviendas',
              type: 'repeat',
              templateOptions: {
                addText: 'Agregar vivienda',
              },
              fieldArray: {
                fieldGroup: [
                  {
                    template: '<h2>Indagación de viviendas y grupos familiares</h2>'
                  },
                  {
                    key: 'numero_vivienda',
                    type: 'input',
                    templateOptions:{
                      label: 'Numero de vivienda',
                      placeholder: 'Ingrese el número que identifique la vivienda',
                      type: 'number',
                      required: true
                    }
                  },
                  {
                    key: 'tipo_propietario',
                    type: 'select',
                    templateOptions: {
                      label: 'Tipo de propietario',
                      options: [
                        { value: 'Propietario de vivienda y terreno', label: 'Propietario de vivienda y terreno' },
                        { value: 'Propietario de solo vivienda', label: 'Propietario de solo vivienda' },
                        { value: 'Ninguno', label: 'Ninguno' },
                        { value: 'Otro', label: 'Otro' },
                        { value: 'Ocupante por préstamo', label: 'Ocupante por préstamo' },
                      ],
                      required: true
                    }
                  },
                  {
                    key: 'Documento a presentar poseedor de titulo de dueño',
                    type: 'select',
                    templateOptions: {
                      label: 'Documento a presentar poseedor de titulo de dueño',
                      options: [
                        { value: 'Boleto compra-venta', label: 'Boleto compra-venta' },
                        { value: 'Sentencia firme de juicio usucapión', label: 'Sentencia firme de juicio usucapión' },
                        { value: 'Auto declaración de herederos', label: 'Auto declaración de herederos' },
                        { value: 'Declaración jurada de herederos con acreditación de vinculo', label: 'Declaración jurada de herederos con acreditación de vinculo' },
                        { value: 'Resolución de inscripción en registro de poseedor LEY 9150', label: 'Resolución de inscripción en registro de poseedor LEY 9150' },
                      ],
                    },
                  },
                  {
                    key: 'Ocupante por préstamo',
                    type: 'select',
                    templateOptions: {
                      label: 'Ocupante por préstamo',
                      options: [
                        { value: 'De un familiar', label: 'De un familiar' },
                        { value: 'Por pago de impuestos/expensas', label: 'Por pago de impuestos/expensas' },
                        { value: 'Ocupante gratuito (sin permiso)', label: 'Ocupante gratuito (sin permiso)' },
                        { value: 'Ocupante de hecho (con permiso)', label: 'Ocupante de hecho (con permiso)' },
                        { value: 'En un relación de depandencia', label: 'En un relación de depandencia' },
                        { value: 'Otra situación', label: 'Otra situación' },
                      ],
                    },
                    expressionProperties:{
                      show: 'model.tipo_propietario == "Ocupante por préstamo"',
                      hide: 'model.tipo_propietario == "Propietario de vivienda y terreno" || model.tipo_propietario == "Propietario de solo vivienda" || model.tipo_propietario == "Ninguno"  || model.tipo_propietario == "Otro" '
                    }
                  },
                  {
                    key: '¿Cuantas habitaciones tienen para dormir?  (sin baño, ni cocina)',
                    type: 'input',
                    templateOptions: {
                      type: 'number',
                      label: '¿Cuantas habitaciones tienen para dormir?  (sin baño, ni cocina)',
                      placeholder: 'Igrese una cantidad',
                      required: true,
                    }
                  },
                  {
                    key: 'Posee sistema estructural',
                    type: 'select',
                    templateOptions: {
                      label: 'Posee sistema estructural',
                      options: [
                        { value: 'Completo (base, columna y /o encadenado, cubierta superior)', label: 'Completo (base, columna y /o encadenado, cubierta superior)' },
                        { value: 'Incompleto', label: 'Incompleto' },
                        { value: 'No tiene', label: 'No tiene' },
                      ]
                    }
                  },
                  {
                    key: 'Tipo de muros',
                    type: 'select',
                    templateOptions: {
                      label: 'Tipo de muros',
                      options: [
                        { value: 'Ladrillo (comun, hormigon, ceramico)', label: 'Ladrillo (comun, hormigon, ceramico)' },
                        { value: 'Madera', label: 'Madera' },
                        { value: 'Carton, chapa y/o desechos', label: 'Carton, chapa y/o desechos' },
                      ]
                    }
                  },
                  {
                    key: 'Tipo de cubierta',
                    type: 'select',
                    templateOptions: {
                      label: 'Tipo de cubierta',
                      options: [
                        { value: 'Losa', label: 'Losa' },
                        { value: 'Madera/chapa', label: 'Madera/chapa' },
                        { value: 'Desechos', label: 'Desechos' },
                      ]
                    }
                  },
                  {
                    template: '<h3>Baño</h3>'
                  },
                  {
                    key: 'posee_baño',
                    type: 'select',
                    templateOptions: {
                      label: '¿Posee baño?',
                      options: [
                        { value: 'Si', label: 'Si' },
                        { value: 'No', label: 'No' },
                      ]
                    }
                  },
                  {
                    key: '¿Cuantos? (baños)',
                    type: 'input',
                    templateOptions: {
                      type: 'number',
                      label: '¿Cuantos?',
                      placeholder: 'Igrese una cantidad'
                    },
                    expressionProperties: {
                      hide: 'model.posee_baño == "No"',
                      show: 'model.posee_baño == "Si"',
                    }
                  },
                  {
                    key: 'Tipo de baño ',
                    type: 'select',
                    templateOptions: {
                      label: 'Tipo de baño',
                      options: [
                        { value: 'Baño instalado', label: 'Baño instalado' },
                        { value: 'Baño incompleto', label: 'Baño incompleto' }
                      ]
                    },
                    expressionProperties: {
                      hide: 'model.posee_baño == "No"',
                      show: 'model.posee_baño == "Si"',
                    }
                  },
                  {
                    key: 'Tratamiento de excretas',
                    type: 'select',
                    templateOptions: {
                      label: 'Tratamiento de excretas',
                      options: [
                        { value: 'A camara de inspeccion', label: 'A camara de inspeccion' },
                        { value: 'A camara septica y pozo', label: 'A camara septica y pozo' },
                        { value: 'Solo a pozo', label: 'Solo a pozo' },
                        { value: 'Hollo, excabación en tierra, etc.', label: 'Hollo, excabación en tierra, etc.' },
                        { value: 'Otros', label: 'Otros' },
                      ]
                    }
                  },
                  {
                    template: '<h3>Agua</h3>'
                  },
                  {
                    key: 'Provisión de agua',
                    type: 'select',
                    templateOptions: {
                      label: 'Provisión de agua',
                      options: [
                        { value: 'Red formal', label: 'Red formal' },
                        { value: 'Red informal', label: 'Red informal' }
                      ]
                    }
                  },
                  {
                    key: '¿El acceso al agua es... ?',
                    type: 'select',
                    templateOptions: {
                      label: '¿El acceso al agua es... ?',
                      options: [
                        { value: 'Por cañería dentro de la vivienda', label: 'Por cañería dentro de la vivienda' },
                        { value: 'Por fuera de la vivienda pero dentro del terreno', label: 'Por fuera de la vivienda pero dentro del terreno' },
                        { value: 'Por fuera del terreno', label: 'Por fuera del terreno' },
                      ]
                    }
                  },
                  {
                    key: '¿Posee tanque de agua?',
                    type: 'select',
                    templateOptions: {
                      label: '¿Posee tanque de agua?',
                      options: [
                        { value: 'Si', label: 'Si' },
                        { value: 'No', label: 'No' },
                      ]
                    }
                  },
                  {
                    template: '<h3>Luz</h3>'
                  },
                  {
                    key: '¿Posee electricidad con medidor?',
                    type: 'select',
                    templateOptions: {
                      label: '¿Posee electricidad con medidor?',
                      options: [
                        { value: 'Si', label: 'Si' },
                        { value: 'No', label: 'No' },
                      ]
                    }
                  },
                  {
                    key: '¿Posee Tarifa Social?',
                    type: 'select',
                    templateOptions: {
                      label: '¿Posee Tarifa Social?',
                      options: [
                        { value: 'Si', label: 'Si' },
                        { value: 'No', label: 'No' },
                      ]
                    }
                  },
                  {
                    template: '<h3>Gas</h3>'
                  },
                  {
                    key: 'Tipo de gas',
                    type: 'select',
                    templateOptions: {
                      label: 'Tipo de gas',
                      options: [
                        { value: 'Gas natural', label: 'Gas natural' },
                        { value: 'Gas envasado', label: 'Gas envasado' },
                      ]
                    }
                  },
                  {
                    template: '<h2>Hogares</h2>'
                  },
                  {
                    key: 'Cantidad de hogares',
                    type: 'input',
                    templateOptions:{
                      label: 'Cantidad de hogares',
                      placeholder: 'Ingrese la cantidad de hogares en la vivienda',
                      type: 'number',
                      required: true
                    }
                  },
                  {
                    key: 'Hogares',
                    type: 'repeat',
                    templateOptions: {
                      addText: 'Agregar hogar',
                    },
                    fieldArray: {
                      fieldGroup: [
                        {
                          key: 'numero_hogar',
                          type: 'input',
                          templateOptions:{
                            label: 'Numero de hogar',
                            placeholder: 'Ingrese un numero de hogar',
                            type: 'number',
                            required: true
                          }
                        },
                        {
                          key: 'Ocupantes',
                          type: 'repeat',
                          templateOptions: {
                            addText: 'Agregar ocupante',
                          },
                          fieldArray: {
                            fieldGroup: [
                              {
                                key: 'Apellidos',
                                type: 'input',
                                templateOptions: {
                                  required: true,
                                  label: 'Apellidos',
                                  placeholder: 'Ingrese un/os apellido/s'
                                }
                              },
                              {
                                key: 'Nombres',
                                type: 'input',
                                templateOptions: {
                                  required: true,
                                  label: 'Nombres',
                                  placeholder: 'Ingrese un/os nombre/s'
                                }
                              },
                              {
                                key: 'DNI',
                                type: 'input',
                                templateOptions: {
                                  required: true,
                                  label: 'DNI',
                                  placeholder: 'Ingrese un DNI',
                                  pattern: '\\d{7,8}'
                                }
                              },
                              {
                                key: 'Fecha de nacimiento',
                                type: 'input',
                                templateOptions: {
                                  type: 'date',
                                  required: true,
                                  label: 'Fecha de nacimiento',
                                }
                              },
                              {
                                key: 'Genero',
                                type: 'select',
                                templateOptions: {
                                  required: true,
                                  label: 'Genero',
                                  options: [
                                    { value: 'Femenino', label: 'Femenino' },
                                    { value: 'Masculino', label: 'Masculino' },
                                  ]
                                }
                              },
                              {
                                key: 'Nacionalidad',
                                type: 'select',
                                templateOptions:{
                                  label: 'Nacionalidad',
                                  options:[
                                    { value: 'Argentina', label: 'Argentina' },
                                    { value: 'Brasil', label: 'Brasil' },
                                    { value: 'Bolivia', label: 'Bolivia' },
                                    { value: 'Chile', label: 'Chile' },
                                    { value: 'Paraguay', label: 'Paraguay' },
                                    { value: 'Perú', label: 'Perú' },
                                    { value: 'Uruguay', label: 'Uruguay' },
                                    { value: 'Otro país', label: 'Otro país' },
                                  ]
                                }
                              },
                              {
                                key: 'Estado Civil',
                                type: 'select',
                                templateOptions:{
                                  label: 'Estado Civil',
                                  options:[
                                    { value: 'Soltero/a', label: 'Soltero/a' },
                                    { value: 'Casado/a', label: 'Casado/a' },
                                    { value: 'Concubino/a', label: 'Concubino/a' },
                                    { value: 'Divorciado/a', label: 'Divorciado/a' },
                                    { value: 'Separado/a de hecho', label: 'Separado/a de hecho' },
                                    { value: 'Viudo/a', label: 'Viudo/a' },
                                    { value: 'Otro', label: 'Otro' },
                                  ]
                                }
                              },
                              {
                                template: '<h3>Salud</h3>'
                              },
                              {
                                key: 'posee_enfermedad_cronica',
                                type: 'select',
                                templateOptions: {
                                  label: '¿Posee alguna enfermedad crónica?',
                                  options: [
                                    { value: 'Si', label: 'Si' },
                                    { value: 'No', label: 'No' },
                                  ]
                                }
                              },
                              {
                                key: '¿Cuál? (enfermedad crónica)',
                                type: 'input',
                                templateOptions: {
                                  label: '¿Cuál?',
                                  placeholder: 'Ingrese un tipo'
                                },
                                expressionProperties: {
                                  hide: 'model.posee_enfermedad_cronica == "No"',
                                  show: 'model.posee_enfermedad_cronica == "Si"',
                                  'templateOptions.required': 'model.posee_enfermedad_cronica == "Si"',
                                }
                              },
                              {
                                key: 'posee_discapacidad',
                                type: 'select',
                                templateOptions: {
                                  label: '¿Posee alguna discapacidad?',
                                  options: [
                                    { value: 'Si', label: 'Si' },
                                    { value: 'No', label: 'No' },
                                  ]
                                }
                              },
                              {
                                key: '¿Cuál? (discapacidad)',
                                type: 'input',
                                templateOptions: {
                                  label: '¿Cuál?',
                                  placeholder: 'Ingrese un tipo'
                                },
                                expressionProperties: {
                                  hide: 'model.posee_discapacidad == "No"',
                                  show: 'model.posee_discapacidad == "Si"',
                                  'templateOptions.required': 'model.posee_discapacidad == "Si"',
                                }
                              },
                              {
                                key: 'cobra_beneficio_social',
                                type: 'select',
                                templateOptions: {
                                  label: '¿Cobra un beneficio social?',
                                  options: [
                                    { value: 'Si', label: 'Si' },
                                    { value: 'No', label: 'No' },
                                  ]
                                }
                              },
                              {
                                key: '¿Cuál? (beneficio)',
                                type: 'select',
                                templateOptions: {
                                  label: '¿Cuál)',
                                  options: [
                                    { value: 'AUH', label: 'AUH' },
                                    { value: 'Beneficiario Programa empleo (XMI;PPP, PILA, PIL)', label: 'Beneficiario Programa empleo (XMI;PPP, PILA, PIL)' },
                                    { value: 'IFE', label: 'IFE' },
                                    { value: 'Jubilación/Pensión', label: 'Jubilación/Pensión' },
                                    { value: 'Pensión Adulto Mayor (PUAM)', label: 'Pensión Adulto Mayor (PUAM)' },
                                    { value: 'Pension Madre de 7 hijos', label: 'Pension Madre de 7 hijos' },
                                    { value: 'Pensión por Discapacidad', label: 'Pensión por Discapacidad' },
                                    { value: 'Seguro de Desempleo', label: 'Seguro de Desempleo' },
                                    { value: 'Tarejeta Social', label: 'Tarejeta Social' },
                                    { value: 'Tarjeta Alimentar', label: 'Tarjeta Alimentar' },
                                    { value: 'Ninguno', label: 'Ninguno' },
                                    { value: 'Otro', label: 'Otro' },
                                  ],
                                },
                                expressionProperties: {
                                  hide: 'model.cobra_beneficio_social == "No"',
                                  show: 'model.cobra_beneficio_social == "Si"',
                                  'templateOptions.required': 'model.cobra_beneficio_social == "Si"',
  
                                }
                              },
                              {
                                template: '<h3>Educación</h3>'
                              },
                              {
                                key: 'Nivel educativo alcanzado',
                                type: 'select',
                                templateOptions: {
                                  label: 'Nivel educativo alcanzado',
                                  options: [
                                    { value: 'Jardin incompleto', label: 'Jardin incompleto' },
                                    { value: 'Jardin completo', label: 'Jardin completo' },
                                    { value: 'Primario incompleto', label: 'Primario incompleto' },
                                    { value: 'Primario completo', label: 'Primario completo' },
                                    { value: 'Secundario incompleto', label: 'Secundario incompleto' },
                                    { value: 'Secundario completo', label: 'Secundario completo' },
                                    { value: 'Terciario incompleto', label: 'Terciario incompleto' },
                                    { value: 'Terciario completo', label: 'Terciario completo' },
                                    { value: 'Universitario incompleto', label: 'Universitario incompleto' },
                                    { value: 'Universitario completo', label: 'Universitario completo' },
                                  ],
                                  required: true,
                                },
                              },
                              {
                                key: '¿Asiste a algun establecimiento educativo?',
                                type: 'select',
                                templateOptions: {
                                  label: '¿Asiste a algun establecimiento educativo?',
                                  options: [
                                    { value: 'Si', label: 'Si' },
                                    { value: 'No', label: 'No' },
                                  ]
                                }
                              },
                              {
                                key: '¿Tiene acceso a internet para la educacion vitual?',
                                type: 'select',
                                templateOptions: {
                                  label: '¿Tiene acceso a internet para la educacion vitual?',
                                  options: [
                                    { value: 'Si', label: 'Si' },
                                    { value: 'No', label: 'No' },
                                  ]
                                }
                              },
                              {
                                key: 'Ocupación',
                                type: 'select',
                                templateOptions: {
                                  label: 'Ocupación',
                                  options: [
                                    { value: 'Ama de casa', label: 'Ama de casa' },
                                    { value: 'Changarin', label: 'Changarin' },
                                    { value: 'Estudiante', label: 'Estudiante' },
                                    { value: 'Inactivo', label: 'Inactivo' },
                                    { value: 'Jubilado/Pensionado', label: 'Jubilado/Pensionado' },
                                    { value: 'Patrón o empleador', label: 'Patrón o empleador' },
                                    { value: 'Servicio doméstico', label: 'Servicio doméstico' },
                                    { value: 'Trabajo voluntario', label: 'Trabajo voluntario' },
                                    { value: 'Cuenta propia', label: 'Cuenta propia' },
                                    { value: 'Cuidado doméstico sin remuneración', label: 'Cuidado doméstico sin remuneración' },
                                    { value: 'Desocupado', label: 'Desocupado' },
                                    { value: 'Economía popular/asociativo', label: 'Economía popular/asociativo' },
                                    { value: 'Empleado de un sector privado', label: 'Empleado de un sector privado' },
                                  ],
                                  required: true,
                                },
                              },
                              {
                                key: 'Ingreso',
                                type: 'input',
                                templateOptions: {
                                  label: 'Ingreso',
                                  placeholder: 'Ingrese un ingreso',
                                  pattern: '\\d{1,25}'
                                }
                              },
                              {
                                key: 'Vínculo con el solicitante',
                                type: 'select',
                                templateOptions: {
                                  required: true,
                                  label: 'Vínculo con el solicitante',
                                  options:[
                                    { value: '1.	Jefe/a del Hogar', label: '1.	Jefe/a del Hogar'},
                                    { value: '2.	Cónyuge/pareja', label: '2.	Cónyuge/pareja'},
                                    { value: '3.	Hijo/a', label: '3.	Hijo/a'},
                                    { value: '4.	Yerno/nuera', label: '4.	Yerno/nuera'},
                                    { value: '5.	Nieto/a', label: '5.	Nieto/a'},
                                    { value: '6.	Padre/madre', label: '6.	Padre/madre'},
                                    { value: '7.	Suegro/a', label: '7.	Suegro/a'},
                                    { value: '8.	Otros familiares', label: '8.	Otros familiares'},
                                    { value: '9.	Otros no Familiares', label: '9.	Otros no Familiares'},
                                  ]
                                }
                              },
                            ]
                          }
                        }
                      ]
                    }
                  }
                ]
              }
            }
          ]
        }
      },
    ];
  }

  createPdfAndSaveInFirebase() {       
    // -     Aca se graba en Firebase v2    -
 
    const newForm = JSON.parse(JSON.stringify(this.model).replace(/\//g, "-"));
    this.db.list('formulariosEmpleo').push(newForm);
    this.model.options.resetModel()
    alert("El formulario se ha cargado con éxito.")

    // } else
    //   (error) => {
    //     console.error('error:', error);
    //   };
    // if (this.form.invalid) {
    //   alert('Algunos datos obligatorios son necesarios');
    // }

  }
}

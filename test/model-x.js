'use strict'

const test = require('ava')

const teslaImages = require('..')

const { isAllReachable } = require('./util')

test('Model X 2016', async t => {
  const photos = teslaImages({
    modelLetter: 'x',
    optionCodes: [
      'BP00',
      'AH00',
      'AD15',
      'GLTL',
      'AU01',
      'X042',
      'DA02',
      'APH1',
      'APD2',
      'X028',
      'BTX4',
      'PX4D',
      'BS00',
      'CC03',
      'BC0R',
      'CH04',
      'CF00',
      'CW02',
      'COFR',
      'X039',
      'IDHG',
      'X026',
      'DRLH',
      'AF02',
      'FG02',
      'FR02',
      'X007',
      'X011',
      'PI01',
      'IX01',
      'X001',
      'LP01',
      'LT3B',
      'MI00',
      'X037',
      'MDLX',
      'DV4W',
      'X024',
      'X003',
      'PMSS',
      'PA00',
      'PS00',
      'PK00',
      'X031',
      'PF01',
      'X044',
      'TM00',
      'BR00',
      'REEU',
      'RFPX',
      'OSSB',
      'X014',
      'S06B',
      'ME02',
      'QLEB',
      'SR01',
      'SP01',
      'X019',
      'SC04',
      'SU01',
      'TP03',
      'TRA1',
      'TR01',
      'TIG2',
      'DSH7',
      'TW00',
      'MT90P',
      'UTAW',
      'WTUT',
      'YFCC',
      'CPF1'
    ]
  })
  t.true(await isAllReachable(photos))
  t.snapshot(photos)
})

test('Model X 2017', async t => {
  const photos = teslaImages({
    modelLetter: 'x',
    optionCodes: [
      'BP01',
      'AH00',
      'AD15',
      'GLTL',
      'AU00',
      'X042',
      'APF2',
      'APH2',
      'APPF',
      'X028',
      'BTX6',
      'PX6D',
      'BS00',
      'CC01',
      'BC0R',
      'CH04',
      'CF01',
      'CW02',
      'CODE',
      'X039',
      'IDBO',
      'X026',
      'DRLH',
      'AF02',
      'FG02',
      'FR02',
      'TD00',
      'X007',
      'X011',
      'INBPB',
      'PI01',
      'IX01',
      'X001',
      'LP01',
      'LT3B',
      'MI02',
      'X037',
      'MDLX',
      'DV4W',
      'X024',
      'X003',
      'PMBL',
      'PA00',
      'PS00',
      'PK00',
      'X031',
      'PF01',
      'X044',
      'TM00',
      'BR00',
      'REEU',
      'RFPX',
      'OSSB',
      'X014',
      'S06B',
      'ME02',
      'QLEB',
      'SR05',
      'SP01',
      'X019',
      'SC04',
      'SU01',
      'TP03',
      'TRA0',
      'TR00',
      'TIG2',
      'DSH7',
      'TW01',
      'MT10L',
      'UTAB',
      'WTUT',
      'YFCC',
      'CPF1'
    ]
  })

  t.true(await isAllReachable(photos))
  t.snapshot(photos)
})

test('Model X 2018', async t => {
  const photos = teslaImages({
    modelLetter: 'x',
    optionCodes: [
      'BP02',
      'AH00',
      'AD15',
      'GLTL',
      'AU01',
      'X042',
      'APF2',
      'APH3',
      'APPF',
      'X028',
      'BTX6',
      'BS00',
      'CC04',
      'BCMB',
      'CH04',
      'CF00',
      'CW02',
      'COSE',
      'X039',
      'IDBA',
      'X026',
      'DRLH',
      'DU00',
      'AF02',
      'FMP6',
      'FG02',
      'FR01',
      'X007',
      'X011',
      'INBTB',
      'PI01',
      'IX00',
      'X001',
      'LP01',
      'LT1B',
      'MI03',
      'X037',
      'MDLX',
      'DV4W',
      'X025',
      'X003',
      'PPSW',
      'PK00',
      'X031',
      'PF00',
      'X043',
      'TM00',
      'BR00',
      'RCX0',
      'REEU',
      'RFPX',
      'OSSB',
      'X014',
      'S01B',
      'ME02',
      'QPBT',
      'SR06',
      'SP01',
      'X021',
      'SC04',
      'SU01',
      'TRA1',
      'TR01',
      'TIM7',
      'DSHG',
      'TW01',
      'MT10A',
      'UTPB',
      'WT20',
      'YFCC',
      'CPF0'
    ]
  })

  t.true(await isAllReachable(photos))
  t.snapshot(photos)
})

test('Model X 2019', async t => {
  const photos = teslaImages({
    modelLetter: 'x',
    optionCodes: [
      'BP02',
      'AH00',
      'AD15',
      'GLTL',
      'AU01',
      'X042',
      'APF2',
      'APH4',
      'APPF',
      'X028',
      'BTX6',
      'BS00',
      'CC04',
      'BCMB',
      'CH09',
      'CF00',
      'CW02',
      'COAT',
      'X039',
      'IDBO',
      'X026',
      'DRLH',
      'DU00',
      'AF02',
      'FMP6',
      'FG02',
      'FR01',
      'X007',
      'X011',
      'PI01',
      'IX00',
      'X001',
      'LP01',
      'LT5P',
      'MI03',
      'X037',
      'MDLX',
      'DV4W',
      'X025',
      'X003',
      'PBSB',
      'PK00',
      'X031',
      'PP01',
      'PF00',
      'X043',
      'TM00',
      'BR00',
      'RCX0',
      'REEU',
      'RFPX',
      'OSSB',
      'X014',
      'S02P',
      'ME02',
      'QLFP',
      'SR06',
      'SP01',
      'X021',
      'SC04',
      'SU01',
      'TRA1',
      'TR01',
      'TIG2',
      'DSHG',
      'TW01',
      'MT10A',
      'UTSB',
      'WTUT',
      'YFCC',
      'CPF0'
    ]
  })

  t.true(await isAllReachable(photos))
  t.snapshot(photos)
})

test('Model X 2020', async t => {
  const photos = teslaImages({
    modelLetter: 'x',
    optionCodes: [
      'MDLX',
      'REEU',
      'COBE',
      'GLTL',
      'BTX9',
      'OSSB',
      'DV4W',
      'DSHG',
      'PK00',
      'PP01',
      'TD00',
      'FR05',
      'PI01',
      'RFPX',
      'PMNG',
      'IDBO',
      'UTSB',
      'WT20',
      'FMP6',
      'FG02',
      'LLP2',
      'AF02',
      'LP01',
      'BP02',
      'BR00',
      'BS00',
      'CDM0',
      'CH09',
      'CF00',
      'CW02',
      'AU01',
      'ME02',
      'MI04',
      'DRLH',
      'PF00',
      'LT5P',
      'S42P',
      'CC02',
      'APBS',
      'APFB',
      'APH4',
      'SC04',
      'SP01',
      'SR04',
      'ST01',
      'SU03',
      'YFCC',
      'TIM7',
      'TM00',
      'TR01',
      'WR02',
      'ZINV',
      'X001',
      'X003',
      'X007',
      'HP00',
      'X011',
      'X014',
      'X021',
      'X025',
      'X026',
      'X028',
      'X031',
      'X037',
      'X043',
      'X039',
      'AD15',
      'AH00',
      'TW01',
      'RCX0',
      'TRA1',
      'X042',
      'FDU2',
      'RDU4',
      'CPF1',
      'FBBB',
      'RBMB',
      'DCF2',
      'MTX05',
      'INB3P'
    ]
  })

  t.true(await isAllReachable(photos))
  t.snapshot(photos)
})

test('Model X 2021', async t => {
  const photos = teslaImages({
    modelLetter: 'x',
    optionCodes: [
      'MDLX',
      'REEU',
      'CODE',
      'GLTL',
      'BTXA',
      'PX6D',
      'OSSB',
      'DV4W',
      'DSHG',
      'PK00',
      'PP01',
      'TD00',
      'FR05',
      'PI01',
      'RFPX',
      'PBSB',
      'IDCF',
      'UTSB',
      'WTUT',
      'FMP6',
      'FG02',
      'LLP2',
      'AF02',
      'LP01',
      'BP01',
      'BR00',
      'BS00',
      'CDM0',
      'CH09',
      'CF00',
      'CW02',
      'AU01',
      'ME02',
      'MI04',
      'DRLH',
      'PF01',
      'LT6P',
      'S42P',
      'CC02',
      'APBS',
      'APFB',
      'APH4',
      'SC04',
      'SP01',
      'SR04',
      'ST01',
      'SU03',
      'YFCC',
      'TIG2',
      'TM00',
      'TR01',
      'WR02',
      'ZINV',
      'X001',
      'X003',
      'X007',
      'HP00',
      'X011',
      'X014',
      'X021',
      'X024',
      'X026',
      'X028',
      'X031',
      'X037',
      'X043',
      'X039',
      'AD15',
      'AH00',
      'TW01',
      'RCX0',
      'TRA1',
      'X042',
      'FDU2',
      'RDU2',
      'CPF1',
      'FBBR',
      'RBMR',
      'DCF2',
      'PWS0',
      'MTX08',
      'INBC3P',
      'ACL1'
    ]
  })

  t.true(await isAllReachable(photos))
  t.snapshot(photos)
})

test('Model X Plaid', async t => {
  const photos = teslaImages({
    modelLetter: 'x',
    optionCodes: ['MTX10', 'PPSW', 'WX00', 'IBE00', 'ST0Y', 'IC00']
  })

  t.true(await isAllReachable(photos))
  t.snapshot(photos)
})

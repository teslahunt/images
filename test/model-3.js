'use strict'

const test = require('ava')

const teslaImages = require('..')

const { isAllReachable } = require('./util')

test('Model 3 2017', async t => {
  const photos = teslaImages({
    modelLetter: 3,
    optionCodes: [
      'APBS',
      'DV2W',
      'IN3PB',
      'PPMR',
      'PRM31',
      'SC04',
      'MDL3',
      'W39B',
      'MT302',
      'CPF0',
      'RSF1'
    ]
  })

  t.true(await isAllReachable(photos))
  t.snapshot(photos)
})

test('Model 3 2018', async t => {
  const photos = teslaImages({
    modelLetter: 3,
    optionCodes: [
      'APBS',
      'APF2',
      'CPF0',
      'DV4W',
      'FM3U',
      'IN3PB',
      'MDL3',
      'MT303',
      'PMBL',
      'PRM31',
      'RSF1',
      'SC04',
      'W38B'
    ]
  })

  t.true(await isAllReachable(photos))
  t.snapshot(photos)
})

test('Model 3 2019', async t => {
  const photos = teslaImages({
    modelLetter: 3,
    optionCodes: [
      'AD15',
      'AF00',
      'APFB',
      'APH3',
      'AU3P',
      'BC3B',
      'BT37',
      'CDM0',
      'CH06',
      'COAT',
      'DRLH',
      'DV2W',
      'FC3P',
      'FG31',
      'FM3B',
      'GLFR',
      'HL31',
      'HM31',
      'ID3W',
      'IL31',
      'LTPB',
      'MDL3',
      'MR31',
      'PBSB',
      'PC30',
      'REEU',
      'RF3G',
      'RS3H',
      'S3PB',
      'SA3P',
      'SC04',
      'STCP',
      'SU3C',
      'T3MS',
      'TM00',
      'TW00',
      'UT3P',
      'W38B',
      'WR00',
      'ZINV',
      'MI00',
      'PL30',
      'SLR0',
      'ST31',
      'BG30',
      'I38M',
      'OSSB',
      'RSF1',
      'CPF0'
    ]
  })
  t.true(await isAllReachable(photos))
  t.snapshot(photos)
})

test('Model 3 2019 MT301', async t => {
  const photos = teslaImages({
    modelLetter: 3,
    optionCodes: [
      'AD15',
      'AF00',
      'APFB',
      'APH4',
      'AU3D',
      'BC3B',
      'BT35',
      'RNG0',
      'CDM0',
      'CH06',
      'COIE',
      'DRRH',
      'DV2W',
      'FC3P',
      'FG3B',
      'FM3S',
      'GLFR',
      'HL31',
      'HM30',
      'ID3W',
      'IL31',
      'LTPB',
      'MDL3',
      'MR31',
      'PPSW',
      'PC30',
      'REEU',
      'RF3G',
      'RS3H',
      'S3PB',
      'SA3P',
      'SC04',
      'STCP',
      'SU3C',
      'T3MS',
      'TM00',
      'TW00',
      'UT3P',
      'W38B',
      'WR00',
      'ZINV',
      'MI00',
      'PL30',
      'SLR0',
      'ST31',
      'BG30',
      'I38M',
      'OSSB',
      'AUF2',
      'RSF0',
      'ILF0',
      'FGF0',
      'CPF1',
      'APBS',
      'IN3BB',
      'PRM30',
      'MT301'
    ]
  })
  t.true(await isAllReachable(photos))
  t.snapshot(photos)
})

test('Model 3 2019 MT302', async t => {
  const photos = teslaImages({
    modelLetter: 3,
    optionCodes: [
      'AD15',
      'AF00',
      'APFB',
      'APH3',
      'AU3P',
      'BC3B',
      'BT37',
      'CDM0',
      'CH06',
      'CONL',
      'DRLH',
      'DV2W',
      'FC3P',
      'FG31',
      'FM3B',
      'GLFR',
      'HL31',
      'HM31',
      'ID3W',
      'IL31',
      'LTPB',
      'MDL3',
      'MR31',
      'PPSW',
      'PC30',
      'REEU',
      'RF3G',
      'RS3H',
      'S3PB',
      'SA3P',
      'SC04',
      'STCP',
      'SU3C',
      'T3MS',
      'TM00',
      'TW00',
      'UT3P',
      'W38B',
      'WR00',
      'ZINV',
      'MI00',
      'PL30',
      'SLR0',
      'ST31',
      'BG30',
      'I38M',
      'OSSB',
      'AUF1',
      'RSF1',
      'ILF1',
      'FGF1',
      'CPF0',
      'APBS',
      'IN3PB',
      'PRM31',
      'MT302'
    ]
  })

  t.true(await isAllReachable(photos))
  t.snapshot(photos)
})

test('Model 3 2020 MT336', async t => {
  const photos = teslaImages({
    modelLetter: 3,
    optionCodes: [
      'AD15',
      'AF00',
      'APFB',
      'APH4',
      'AU3D',
      'BC3B',
      'BTF0',
      'RNG0',
      'CDM0',
      'CH15',
      'COES',
      'DRLH',
      'DV2W',
      'FC01',
      'FG3B',
      'FM3S',
      'GLCN',
      'HL32',
      'HM30',
      'ID3A',
      'IL31',
      'LTPW',
      'MDL3',
      'MR31',
      'PPMR',
      'PC30',
      'REEU',
      'RF3G',
      'RS3H',
      'S3PW',
      'SA3P',
      'SC04',
      'STCP',
      'SU3C',
      'T3HS',
      'TM00',
      'TW01',
      'UT3P',
      'W39B',
      'WR00',
      'ZINV',
      'MI01',
      'PL30',
      'SLR0',
      'ST30',
      'BG30',
      'I38M',
      'OSSB',
      'AUF2',
      'RSF0',
      'ILF0',
      'FGF0',
      'CPF0',
      'HP30',
      'PT00',
      'RL31',
      'LVB0',
      'RD02',
      'APBS',
      'IN3BW',
      'PRM30',
      'MT336'
    ]
  })

  t.true(await isAllReachable(photos))
  t.snapshot(photos)
})

test('Model 3 2021 MT322', async t => {
  const photos = teslaImages({
    modelLetter: 3,
    optionCodes: [
      'AD15',
      'AF00',
      'APFB',
      'APH4',
      'AU3D',
      'BC3B',
      'BTF1',
      'RNG0',
      'CDM0',
      'CH15',
      'COFR',
      'DRLH',
      'DV2W',
      'FC02',
      'FG3B',
      'FM3S',
      'GLCN',
      'HL32',
      'HM30',
      'ID3W',
      'IL31',
      'LT03',
      'MDL3',
      'MR31',
      'PPSW',
      'PC30',
      'REEU',
      'RF3G',
      'RS3H',
      'S3PB',
      'SA3P',
      'SC04',
      'STCP',
      'SU3C',
      'T3HS',
      'TM00',
      'TW00',
      'UT3P',
      'W41B',
      'WR00',
      'ZINV',
      'MI02',
      'PL30',
      'SLR0',
      'ST33',
      'BG30',
      'OSSB',
      'AUF2',
      'RSF0',
      'ILF0',
      'FGF0',
      'CPF0',
      'P3WS',
      'HP31',
      'PT01',
      'RL31',
      'LVB1',
      'RD06',
      'SWF0',
      'PP02',
      'VC00',
      'LS01',
      'APBS',
      'IBB1',
      'PRM30',
      'MT322'
    ]
  })

  t.true(await isAllReachable(photos))
  t.snapshot(photos)
})

test('Model 3 2021 MT323', async t => {
  const photos = teslaImages({
    modelLetter: 3,
    optionCodes: [
      'AD15',
      'AF00',
      'APFB',
      'APH4',
      'AU3D',
      'BC3B',
      'BTF1',
      'RNG0',
      'CDM0',
      'CH15',
      'COFR',
      'DRLH',
      'DV2W',
      'FC02',
      'FG3B',
      'FM3S',
      'GLCN',
      'HL32',
      'HM30',
      'ID3W',
      'IL31',
      'LT03',
      'MDL3',
      'MR31',
      'PPSW',
      'PC30',
      'REEU',
      'RF3G',
      'RS3H',
      'S3PB',
      'SA3P',
      'SC04',
      'STCP',
      'SU3C',
      'T3HS',
      'TM00',
      'TW00',
      'UT3P',
      'W41B',
      'WR00',
      'ZINV',
      'MI02',
      'PL30',
      'SLR0',
      'ST33',
      'BG30',
      'OSSB',
      'AUF2',
      'RSF0',
      'ILF0',
      'FGF0',
      'CPF0',
      'P3WS',
      'HP31',
      'PT01',
      'RL31',
      'LVB1',
      'RD06',
      'SWF0',
      'PP02',
      'VC00',
      'LS01',
      'APBS',
      'IPB1',
      'PRM30',
      'MT323'
    ]
  })

  t.true(await isAllReachable(photos))
  t.snapshot(photos)
})

test('Model 3 2021', async t => {
  const photos = teslaImages({
    modelLetter: 3,
    optionCodes: [
      'AD15',
      'AF00',
      'APBS',
      'APFB',
      'APH4',
      'AU3D',
      'AUF2',
      'BC3B',
      'BG30',
      'BT35',
      'CDM0',
      'CH15',
      'COIE',
      'CPF0',
      'DRRH',
      'DV2W',
      'FC02',
      'FG3B',
      'FGF0',
      'FM3S',
      'GLFR',
      'HL32',
      'HM30',
      'HP31',
      'I36M',
      'ID3W',
      'IL31',
      'ILF0',
      'IN3BB',
      'LTPB',
      'MDL3',
      'MI02',
      'MR31',
      'MT320',
      'OSSB',
      'PBSB',
      'PC30',
      'PL30',
      'PRM30',
      'PT01',
      'REEU',
      'RF3G',
      'RL31',
      'RNG0',
      'RS3H',
      'RSF0',
      'S3PB',
      'SA3P',
      'SC04',
      'SLR0',
      'ST30',
      'STCP',
      'SU3C',
      'T3MS',
      'TM00',
      'TW00',
      'UT3P',
      'W40B',
      'WR00',
      'ZINV'
    ]
  })

  t.true(await isAllReachable(photos))
  t.snapshot(photos)
})

const combinations = []

for (const interior of ['IPB2', 'IPB3', 'IPW2', 'IPW3']) {
  for (const wheel of ['W38A', 'W39S']) {
    for (const color of ['PPSW', 'PBSB', 'PPSB', 'PN01', 'PR01']) {
      for (const chasis of ['MT351', 'MT352']) {
        combinations.push([chasis, interior, wheel, color])
      }
    }
  }
}

for (const optionCodes of combinations) {
  test.serial(`Model 3 Highland (${optionCodes.join(', ')})`, async t => {
    const photos = teslaImages({ modelLetter: 3, optionCodes })
    t.true(await isAllReachable(photos))
    t.snapshot({ optionCodes, photos })
  })
}

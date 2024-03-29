'use strict'

const test = require('ava')

const teslaImages = require('..')

const { isAllReachable } = require('./util')

test('Model Y', async t => {
  const photos = teslaImages({
    modelLetter: 'y',
    optionCodes: [
      'AD15',
      'AF02',
      'APF1',
      'APH4',
      'AU3P',
      'BC3B',
      'BT38',
      'CDM0',
      'CH15',
      'COLU',
      'DRLH',
      'DV4W',
      'FC02',
      'FG31',
      'FM3B',
      'HL32',
      'HM30',
      'ID3A',
      'IL31',
      'LT03',
      'MDLY',
      'MR31',
      'PMNG',
      'PC30',
      'REEU',
      'RF3G',
      'RS3H',
      'S3PW',
      'SA3P',
      'SC04',
      'STCP',
      'SU3C',
      'TY9S',
      'TM00',
      'TW00',
      'UT3P',
      'WY9S',
      'WR00',
      'ZINV',
      'MI00',
      'PL30',
      'SLR0',
      'ST33',
      'BG31',
      'OSSB',
      'AUF1',
      'RSF1',
      'ILF1',
      'FGF1',
      'CPF0',
      'TSHP',
      'TR00',
      'SR05',
      'P3WS',
      'RL32',
      'BY01',
      'FD01',
      'RD05',
      'SWF1',
      'LVB1',
      'VC00',
      'APPB',
      'APBS',
      'INPW0',
      'PRMY1',
      'WY19B',
      'MTY07',
      'STY5S'
    ]
  })

  t.true(await isAllReachable(photos))
  t.snapshot(photos)
})

test('Model Y Quicksilver', async t => {
  const photos = teslaImages({
    modelLetter: 'y',
    optionCodes: [
      'AF02',
      'APFB',
      'APH4',
      'AU3P',
      'BC3B',
      'BT43',
      'CH15',
      'COBE',
      'DRLH',
      'DV4W',
      'FC02',
      'FG31',
      'FM3B',
      'HL32',
      'HM30',
      'ID3A',
      'IL31',
      'LT03',
      'MDLY',
      'MR31',
      'PN00',
      'PC30',
      'REEU',
      'S3PW',
      'SC04',
      'SU3C',
      'TY9B',
      'TM00',
      'TW00',
      'WY9S',
      'ZINV',
      'MY00',
      'PL30',
      'SLR0',
      'ST33',
      'BG31',
      'OSSB',
      'AUF1',
      'RSF1',
      'ILF1',
      'FGF1',
      'CPF0',
      'TSHP',
      'SR05',
      'PW01',
      'RL32',
      'BY03',
      'FD00',
      'RD05',
      'SWF1',
      'LVB2',
      'RA00',
      'VC01',
      'US00',
      'APBS',
      'INPW0',
      'PRMY1',
      'WY19B',
      'MTY09',
      'STY5S'
    ]
  })
  t.true(await isAllReachable(photos))
  t.snapshot(photos)
})

test('Model Y Midnight Cherry Red', async t => {
  const photos = teslaImages({
    modelLetter: 'y',
    optionCodes: [
      'AF02',
      'APFB',
      'APH4',
      'AU3P',
      'BC3B',
      'BT43',
      'CH15',
      'COBE',
      'DRLH',
      'DV4W',
      'FC02',
      'FG31',
      'FM3B',
      'HL32',
      'HM30',
      'ID3A',
      'IL31',
      'LT03',
      'MDLY',
      'MR31',
      'PR00',
      'PC30',
      'REEU',
      'S3PW',
      'SC04',
      'SU3C',
      'TY9B',
      'TM00',
      'TW00',
      'WY9S',
      'ZINV',
      'MY00',
      'PL30',
      'SLR0',
      'ST33',
      'BG31',
      'OSSB',
      'AUF1',
      'RSF1',
      'ILF1',
      'FGF1',
      'CPF0',
      'TSHP',
      'SR05',
      'PW01',
      'RL32',
      'BY03',
      'FD00',
      'RD05',
      'SWF1',
      'LVB2',
      'RA00',
      'VC01',
      'US00',
      'APBS',
      'INPW0',
      'PRMY1',
      'WY19B',
      'MTY09',
      'STY5S'
    ]
  })
  t.true(await isAllReachable(photos))
  t.snapshot(photos)
})

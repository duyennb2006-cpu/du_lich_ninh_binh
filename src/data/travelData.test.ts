import test from 'node:test';
import assert from 'node:assert/strict';
import {
  ATTRACTIONS_DATA,
  CUISINE_DATA,
  RENTAL_SHOPS,
  ITINERARY_PLANS,
  calculateTripCost,
  formatVND
} from './travelData.ts';

test('travelData contains all required 3 tourist attractions', () => {
  assert.equal(ATTRACTIONS_DATA.length >= 3, true);
  const ids = ATTRACTIONS_DATA.map((a) => a.id);
  assert.ok(ids.includes('trang-an'), 'Must include Tràng An');
  assert.ok(ids.includes('pho-co-hoa-lu'), 'Must include Phố cổ Hoa Lư');
  assert.ok(ids.includes('chua-bich-dong'), 'Must include Chùa Bích Động');

  // Verify all attractions have valid direct image URLs and descriptions
  for (const attr of ATTRACTIONS_DATA) {
    assert.ok(attr.name.length > 0);
    assert.ok(attr.description.length > 30);
    assert.ok(attr.image.startsWith('https://images.unsplash.com/'));
    assert.ok(attr.ticketPrice.length > 0);
  }
});

test('travelData contains all 3 required cuisines with exact addresses and restaurants', () => {
  assert.equal(CUISINE_DATA.length >= 3, true);
  const dishIds = CUISINE_DATA.map((d) => d.id);
  assert.ok(dishIds.includes('thit-de-nui'), 'Must include Thịt dê núi');
  assert.ok(dishIds.includes('com-chay'), 'Must include Cơm cháy');
  assert.ok(dishIds.includes('oc-nui'), 'Must include Ốc núi Tràng An');

  const deNui = CUISINE_DATA.find((d) => d.id === 'thit-de-nui')!;
  assert.ok(deNui.placeName.includes('Chính Thư'));
  assert.ok(deNui.placeAddress.includes('Hoa Lư'));

  const comChay = CUISINE_DATA.find((d) => d.id === 'com-chay')!;
  assert.ok(comChay.placeName.includes('Thăng Long'));
  assert.ok(comChay.placeAddress.includes('Chi Phong'));

  const ocNui = CUISINE_DATA.find((d) => d.id === 'oc-nui')!;
  assert.ok(ocNui.placeName.includes('Quốc Khánh'));
  assert.ok(ocNui.placeAddress.includes('Tràng An'));
});

test('rental shops contain Duc Thang and Trang An Eco with hotlines and pricing', () => {
  const ducThang = RENTAL_SHOPS.find((s) => s.id === 'duc-thang');
  assert.ok(ducThang, 'Duc Thang rental shop must exist');
  assert.equal(ducThang.hotline, '0912 345 678');
  assert.equal(ducThang.rawPhone, '0912345678');
  assert.ok(ducThang.pricing.some((p) => p.item.includes('Xe số') && p.price.includes('100.000')));
  assert.ok(ducThang.pricing.some((p) => p.item.includes('Xe tay ga') && p.price.includes('150.000')));

  const eco = RENTAL_SHOPS.find((s) => s.id === 'trang-an-eco');
  assert.ok(eco, 'Trang An Eco rental shop must exist');
  assert.equal(eco.hotline, '0988 765 432');
  assert.equal(eco.rawPhone, '0988765432');
});

test('itineraries contain 1-day and 2-days-1-night plans', () => {
  assert.ok(ITINERARY_PLANS.some((p) => p.id === 'plan-1-day'));
  assert.ok(ITINERARY_PLANS.some((p) => p.id === 'plan-2-days'));
});

test('calculateTripCost calculates accurate estimate and handles people count properly', () => {
  const cost1 = calculateTripCost({
    planType: '1-day',
    peopleCount: 2,
    vehicleType: 'xe_so',
    hotelStyle: 'none'
  });
  assert.ok(cost1.grandTotal > 0);
  assert.ok(cost1.perPerson > 0);
  assert.equal(cost1.breakdown.accommodation, 0);

  const cost2 = calculateTripCost({
    planType: '2-days',
    peopleCount: 2,
    vehicleType: 'xe_ga',
    hotelStyle: 'homestay_view'
  });
  assert.ok(cost2.breakdown.accommodation > 0);
  assert.ok(cost2.grandTotal > cost1.grandTotal);

  assert.ok(formatVND(100000).includes('100.000'));
});

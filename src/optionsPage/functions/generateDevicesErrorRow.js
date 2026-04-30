//
//  This file is part of the 2FAS Browser Extension (https://github.com/twofas/2fas-browser-extension)
//  Copyright © 2026 Two Factor Authentication Service, Inc.
//  Contributed by Grzegorz Zając. All rights reserved.
//
//  This program is free software: you can redistribute it and/or modify
//  it under the terms of the GNU General Public License as published by
//  the Free Software Foundation, either version 3 of the License, or
//  any later version.
//
//  This program is distributed in the hope that it will be useful,
//  but WITHOUT ANY WARRANTY; without even the implied warranty of
//  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
//  GNU General Public License for more details.
//
//  You should have received a copy of the GNU General Public License
//  along with this program. If not, see <https://www.gnu.org/licenses/>
//

import browser from 'webextension-polyfill';
import { createElement, createTextElement } from '@partials/DOMElements';

/**
 * Renders an error-state row in the devices table when the device list cannot be fetched.
 *
 * @param {HTMLTableSectionElement} tbody - The table body element to append the row to
 * @param {('offline'|'apiError')} [reason='apiError'] - Why the list could not be loaded
 * @returns {void}
 */
const generateDevicesErrorRow = (tbody, reason = 'apiError') => {
  const messageKey = reason === 'offline' ? 'devicesListOffline' : 'devicesListError';
  const message = browser.i18n.getMessage(messageKey) || 'Could not load paired devices.';

  let t = {
    tr: null,
    td: null,
    text: null
  };

  t.tr = createElement('tr');
  t.td = createElement('td');
  t.td.setAttribute('colspan', '4');

  t.text = createTextElement('p', message);

  t.td.appendChild(t.text);
  t.tr.appendChild(t.td);
  tbody.appendChild(t.tr);

  t = null;
};

export default generateDevicesErrorRow;

/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License;
 * you may not use this file except in compliance with the Elastic License.
 */

import {
  EuiSpacer,
  // @ts-ignore
  EuiSuperSelect,
  EuiText,
} from '@elastic/eui';
import * as React from 'react';
import styled from 'styled-components';

import { timelineModel } from '../../../store';
import { AndOrBadge } from '../../and_or_badge';

import * as i18n from './translations';

const AndOrContainer = styled.div`
  position: relative;
  top: -1px;
`;

interface ModeProperties {
  mode: timelineModel.KqlMode;
  description: string;
  kqlBarTooltip: string;
  placeholder: string;
  selectText: string;
}

export const modes: { [key in timelineModel.KqlMode]: ModeProperties } = {
  filter: {
    mode: 'filter',
    description: i18n.FILTER_DESCRIPTION,
    kqlBarTooltip: i18n.FILTER_KQL_TOOLTIP,
    placeholder: i18n.FILTER_KQL_PLACEHOLDER,
    selectText: i18n.FILTER_KQL_SELECTED_TEXT,
  },
  search: {
    mode: 'search',
    description: i18n.SEARCH_DESCRIPTION,
    kqlBarTooltip: i18n.SEARCH_KQL_TOOLTIP,
    placeholder: i18n.SEARCH_KQL_PLACEHOLDER,
    selectText: i18n.SEARCH_KQL_SELECTED_TEXT,
  },
};

export const options = [
  {
    value: modes.filter.mode,
    inputDisplay: (
      <AndOrContainer>
        <AndOrBadge type="and" />
        {modes.filter.selectText}
      </AndOrContainer>
    ),
    dropdownDisplay: (
      <>
        <AndOrBadge type="and" />
        <strong>{modes.filter.selectText}</strong>
        <EuiSpacer size="xs" />
        <EuiText size="s" color="subdued">
          <p className="euiTextColor--subdued">{modes.filter.description}</p>
        </EuiText>
      </>
    ),
  },
  {
    value: modes.search.mode,
    inputDisplay: (
      <AndOrContainer>
        <AndOrBadge type="or" />
        {modes.search.selectText}
      </AndOrContainer>
    ),
    dropdownDisplay: (
      <>
        <AndOrBadge type="or" />
        <strong>{modes.search.selectText}</strong>
        <EuiSpacer size="xs" />
        <EuiText size="s" color="subdued">
          <p className="euiTextColor--subdued">{modes.search.description}</p>
        </EuiText>
      </>
    ),
  },
];

export const getPlaceholderText = (kqlMode: timelineModel.KqlMode): string =>
  kqlMode === 'filter' ? i18n.FILTER_KQL_PLACEHOLDER : i18n.SEARCH_KQL_PLACEHOLDER;

import React, { ReactNode } from 'react';
import { Box, List, ListItem, ListItemText } from '@material-ui/core';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { isSameDay } from 'date-fns';

// eslint-disable-next-line no-unused-vars
import { DefinedRange, DateRange } from '../types';

type DefinedRangesProps = {
  setRange: (range: DateRange) => void;
  selectedRange: DateRange;
  ranges: DefinedRange[];
  labelLeftIcon?: ReactNode;
  labelRightIcon?: ReactNode;
};

const isSameRange = (first: DateRange, second: DateRange) => {
  const { startDate: fStart, endDate: fEnd } = first;
  const { startDate: sStart, endDate: sEnd } = second;
  if (fStart && sStart && fEnd && sEnd) {
    return isSameDay(fStart, sStart) && isSameDay(fEnd, sEnd);
  }
  return false;
};

const DefinedRanges: React.FunctionComponent<DefinedRangesProps> = ({
  ranges,
  setRange,
  selectedRange,
  labelLeftIcon,
  labelRightIcon = <ChevronRightIcon />
}: DefinedRangesProps) => (
  <List>
    {ranges.map((range, idx) => (
      // eslint-disable-next-line react/no-array-index-key
      <ListItem button key={idx} onClick={() => setRange(range)}>
        <ListItemText
          primaryTypographyProps={{
            variant: 'body2',
            style: {
              fontWeight: isSameRange(range, selectedRange)
                ? 'bold'
                : 'normal',
              display: "flex",
              textWrap: "nowrap",
              alignItems: "center",
              justifyContent: "space-between",
              width: "100px"
            },
          }}
        >
          {labelLeftIcon && isSameRange(range, selectedRange) && (
            <>{labelLeftIcon}</>
          )}
          {range.label}
          {labelRightIcon && isSameRange(range, selectedRange) && (
            <>{labelRightIcon}</>
          )}
        </ListItemText>
      </ListItem>
    ))}
  </List>
);

export default DefinedRanges;

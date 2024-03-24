import React, { ReactNode } from 'react';
import { List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import { isSameDay } from 'date-fns';
import { DateRange, DefinedRange } from '../types';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

type DefinedRangesProps = {
  // eslint-disable-next-line no-unused-vars
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
  labelRightIcon = <KeyboardArrowRightIcon />
}: DefinedRangesProps) => (
  <List>
    {ranges.map((range, idx) => (
      <ListItemButton
        key={idx}
        onClick={() => setRange(range)}
        sx={[
          isSameRange(range, selectedRange) && {
            backgroundColor: (theme) => theme.palette.primary.dark,
            color: 'primary.contrastText',
            '&:hover': {
              color: 'inherit'
            }
          }]}
      >
        <ListItemText
          primaryTypographyProps={{
            variant: 'body2',
            sx: {
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
      </ListItemButton>
    ))}
  </List>
);

export default DefinedRanges;
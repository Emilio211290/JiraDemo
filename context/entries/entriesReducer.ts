import { EntriesState } from './EntriesProvider';

type actionType = { type: 'Entries - add entrie' };

export const entriesReducer = (
  state: EntriesState,
  action: actionType
): EntriesState => {
  return state;
};

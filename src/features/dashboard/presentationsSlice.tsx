import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../../app/store';

// Define a type for the slice state
export enum DownloadStates {
  AWAITING, // special status at the beginning of the lifecycle
  POPULATED,
}

interface Presentations {
  state: DownloadStates,
  presentations: {
    [key: string]: Presentation,
  }
}

export interface Presentation {
  pres_id: string,
  pres_name: string,
  shclock: boolean,
  emojicomms: boolean,
  shpres: boolean,
  accode: string,
  description: string,
}

// TODO Remove the mock presentations and have initial state AWAITING
const initialState : Presentations = {
  state: DownloadStates.POPULATED,
  presentations: {
    "11": {
      pres_id: "11",
      pres_name: "Jolonese",
      shclock: true,
      emojicomms: true,
      shpres: true,
      accode: "affengeil",
      description: "Eine mega geile Präsi",
    },
    "12": {
      pres_id: "12",
      pres_name: "UltraJolonese",
      shclock: true,
      emojicomms: true,
      shpres: true,
      accode: "megaaffengeil",
      description: "Eine übertrieben geile Präsi",
    },
    "13": {
      pres_id: "13",
      pres_name: "UltraHammerJolonese",
      shclock: true,
      emojicomms: true,
      shpres: true,
      accode: "megasuperaffengeil",
      description: "Eine hart übertrieben geile Präsi",
    }
  }
}

export const presentationsSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    reset: (state) => {
      state = initialState;
    },
  },
})

// TODO Memoize the selectors
const getAllPresentationsSelector = (state: RootState) => state.presentations.presentations;

// Action creators are generated for each case reducer function
const { reset } = presentationsSlice.actions;
export { reset, getAllPresentationsSelector }

export default presentationsSlice.reducer;
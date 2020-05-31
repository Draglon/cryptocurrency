import { COLORS } from '../../constants/variables';

export const Page = {
  style: {
    flex: 1,
    alignItems: 'stretch',
    position: 'relative',
  },
};

export const PageBody = {
  style: {
    flex: 1,
    backgroundColor: COLORS.dark,
  },
};

export const PageWrapper = {
  style: {
    backgroundColor: COLORS.dark,
    alignItems: 'stretch',
    paddingTop: 10,
    paddingBottom: 20,
  },
};

export const PageHeader = {
  style: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
  },
};

export const PageTitle = {
  style: {
    alignItems: 'stretch',
    marginBottom: 0,
  },
};

export const PageContent = {
  style: {
    paddingTop: 10,
    paddingBottom: 10,
  },
};

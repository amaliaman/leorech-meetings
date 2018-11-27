import { LOCALE } from '../constants/strings';

class StringUtils {
    getDateString = date => {
        return date.toLocaleString(LOCALE, { year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', minute: 'numeric' });
    }
}

const stringUtils = new StringUtils();
export default stringUtils;
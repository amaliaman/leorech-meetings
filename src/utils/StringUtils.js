import { LOCALE } from '../constants/strings';
import uuidv4 from 'uuid/v4';

class StringUtils {
    getDateString = date => {
        return date.toLocaleString(LOCALE, { year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', minute: 'numeric' });
    };

    generateKey = () => {
        return uuidv4();
    };
}

const stringUtils = new StringUtils();
export default stringUtils;
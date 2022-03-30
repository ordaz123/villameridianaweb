import React, { useState } from "react";
//import i18next ,{withNamespaces} from "../../i18n/i18next";
//import i18n from '../../i18n/i18next';

import i18n from '../../i18n/i18next';


import { withNamespaces } from 'react-i18next';
import { Dropdown } from "react-bootstrap"


function LanguageSelector({ t }) {

    const [value, setValue] = useState("default");

    // const { t } = useTranslation();
    /*     const changeLanguage = (lng) => {
            console.log("sdsd")
            i18n.changeLanguage(lng);
        } */
    const changeLanguage = (lng) => {
        console.log("sds")
        i18n.changeLanguage(lng);
    }



    return <div className="tp-lang-wrap">


        <select className="nice-select" data-width="fit" defaultValue={value} onChange={(e) => changeLanguage(e.target.value)}>
            {/*         <option value="default" disabled hidden>
          Language
        </option> */}
            <option value="en">English</option>
            <option value="hr">Hrvatski</option>
            <option value="de">Deutsch</option>

        </select>

        {/*         <select className='select single-select' data-width="fit" name="languages" value={t('selectLanguage')} onChange={(e) => console.log(e.target.value)
        }>
            {/* <option value="" disabled hidden>{t('select_language')}</option> 
            <option value="hr">Hrvatski</option>
            <option value="en">English</option>
            <option value="de">Deutsch</option>
        </select> */}
    </div>
}
export default withNamespaces()(LanguageSelector);
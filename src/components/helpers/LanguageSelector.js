import React from "react";
import {useTranslation} from "react-i18next";
import i18next from "../../i18n/i18next";

const LanguageSelector = () =>{
    const { t } = useTranslation();

    return <div className="tp-lang-wrap">
            <select className='select single-select' data-width="fit" name="languages" value={localStorage.getItem('i18nextLng')}  onChange={(e)=> {
                i18next.changeLanguage(e.target.value)
            }}>
                <option value="" disabled hidden>{t('select_language')}</option>
                <option value="hr">Hrvatski</option>
                <option value="en">English</option>
                <option value="de">Deutsch</option>
            </select>
        </div>
}
export default LanguageSelector;
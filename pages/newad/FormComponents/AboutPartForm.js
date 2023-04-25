import React from "react";
import CircularLoading from "../../../components/Loadings/CircularLoading";
import Select2 from "react-select2-wrapper";
import * as IconSax from "iconsax-react";


export default function AboutPartForm({id,isLoading, title, description, category, secondCategory, categories, secondCategories, changeTitle, changeDescription, changeCategory, changeSecondCategory}){
    return (
        isLoading ? (<CircularLoading />) : (
            <>
                <h4 className="mt-0">عنوان تابلو</h4>
                <p className="flex text-gray-500 text-xs items-center m-1">
                    <IconSax.InfoCircle className="ml-1 animate-pulse text-primary/70" size="16" /> ترجیحا از عناوین جذاب و معنا دار استفاده کنید تا هنگام رویت حس
                    بهتری به صاحبین کسب و کار القا کند. </p>
                <input
                    type="text"
                    value={title}
                    onChange={e => { changeTitle(e.currentTarget.value); }}
                    className="input px-2.5 pb-2.5 pt-3 w-full text-sm text-gray-900 focus:outline-primary "
                />

                <h4>انتخاب دسته بندی</h4>
                <Select2 dir="rtl"
                         defaultValue={category}
                         onChange={(e) => changeCategory(e.target.value)}
                         options={
                             {placeholder: "انتخاب دسته بندی"}
                         }
                         data={categories.map(e => {
                             return {
                                 key: e.id,
                                 value: e.id,
                                 text: e.name,
                             };
                         })}

                />

                <h4>انتخاب زیردسته بندی</h4>
                <Select2 dir="rtl"
                         defaultValue={secondCategory}
                         onChange={(e) => changeSecondCategory(e.target.value)}
                         options={
                             {placeholder: "انتخاب زیر دسته بندی"}
                         }
                         data={secondCategories.map(e => {
                             return {
                                 key: e.id,
                                 value: e.id,
                                 text: e.name,
                             };
                         })}

                />

                <h4>درباره تابلو</h4>
                <textarea name="description"
                          value={description}
                          onChange={e => { changeDescription(e.currentTarget.value); }}
                          className="input px-2.5 pb-2.5 pt-3 w-full text-sm text-gray-900 focus:outline-primary focus:animate-pulse"
                />
                <p className="flex text-gray-500 text-xs items-start m-1"><IconSax.InfoCircle className="ml-1 animate-pulse text-primary/70" size="32" /> در اینجا نکاتی را که صاحب کسب کار باید درباره تابلو شما بداند
                    بنویسید، از نقاط قوت و ضعف تابلو، بعنوان مثال از دید عالی در طول شبانه روز و
                    یا از نبودن فرصت مناسب برای رویت یک تصویر تبلیغاتی کامل، به طور خلاصه هر
                    آنچه یک صاحب کسب و کار لازم است بنداند را اینجا بنویسید.
                </p>

            </>
        )
    );
}
import React, {useState, useEffect} from "react";
import FixedNavbar from "../../components/Header/fixednav";
import * as IconSax from "iconsax-react";
import RequestsUtils from "../../utils/RequestsUtils";
import { Breadcrumbs } from "@material-tailwind/react";
import TabItemComponents from "../../components/Ads/TabItemComponents";
import Hidden from "@material-ui/core/Hidden";
import CircularLoading from "../../components/Loadings/CircularLoading";
import LocationPartForm from "./FormComponents/LocationPartForm";
import AboutPartForm from "./FormComponents/AboutPartForm";
import toast, { Toaster } from 'react-hot-toast';
import Select2 from "react-select2-wrapper";
import { Circle } from 'react-circle';
export default function Index(props) {
    const [percent, setPercent] = useState(0);
    const [adId, setAdId] = useState(0);
    const [formStep, setFormStep] = useState(0);
    const [title, setTitle] = useState();
    const [description, setDescription] = useState();
    const [state, setState] = useState();
    const [city, setCity] = useState();
    const [category, setCategory] = useState();
    const [secondCategory, setSecondCategory] = useState();
    const [thirdCategory, setThirdCategories] = useState([]);
    const [states, setStates] = useState([]);
    const [cities, setCities] = useState([]);
    const [categories, setCategories] = useState([]);
    const [secondCategories, setSecondCategories] = useState([]);
    const [isLoading, setIsLoading] = useState(false)
    const [cityIsLoading, setCityIsLoading] = useState(false);
    const [addType, setAddType] = useState();
    const [materials, setMaterials] = useState([]);
    const [bannerTypes, setBannerTypes] = useState([]);
    const [lightTypes, setLightTypes] = useState([]);
    const [adWidth, setAdWidth] = useState();
    const [adHeight, setAdHeight] = useState();
    const [adSize, setAdSize] = useState();
    const [material, setMaterial] = useState();
    const [bannerType, setBannerType] = useState();
    const [lightType, setLightType] = useState();
    const [hasLighting, setHasLighting] = useState(false);
    const [hasRotation, setHasRotation] = useState(false);
    const [dayTimes, setDayTimes] = useState([]);
    const [dayTime, setDayTime] = useState();
    const [viewerConditions, setViewerConditions] = useState([]);
    const [viewerTypes, setViewerTypes] = useState([]);
    const [viewerAges, setViewerAges] = useState([]);
    const [viewerCondition, setViewerCondition] = useState();
    const [viewerType, setViewerType] = useState();
    const [viewerAge, setViewerAge] = useState();
    const [viewDuration, setViewDuration] = useState();
    const [viewerSpeed, setViewerSpeed] = useState();
    const [gender, setGender] = useState(1);

    function handleClick(step) {
        setFormStep(step)
    }

    async function nextStep() {
        console.log(formStep)
        let nextFormStep = false;
        let finalStep = 11;
        switch (formStep) {
            case 0:
                nextFormStep = await LocationSubmit();
                break;
            case 1:
                nextFormStep = await AboutSubmit();
                break;
            case 2:
                nextFormStep = await AddTypeSubmit();
                break;
            case 3:
                nextFormStep = await AddTechnicalSubmit();
                break;
            case 3:
                nextFormStep = await AddViewOptions();
                break;
        }
        if (formStep < finalStep && nextFormStep) setFormStep(formStep + 1);
    }

    function prevStep() {
        let targetStep = 0;
        if (formStep > 0) setFormStep(formStep - 1);
    }

    const {...rest} = props;
    function makeToast(title , message){
        toast.custom((t ) => (
            <div
                className={`${
                    t.visible ? 'animate-enter' : 'animate-leave'
                } max-w-md w-full bg-white shadow-lg border-2 rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
            >
                <div className="flex-1 w-0 p-4">
                    <div className="flex items-start">

                        <div className="ml-3 flex-1">
                            <p className="text-sm font-medium text-red-800">
                                {title}
                            </p>
                            <p className="mt-1 text-sm text-gray-500">
                                {message}
                            </p>
                        </div>
                    </div>
                </div>
                <div className="flex border-l border-gray-200">
                    <button
                        onClick={() => toast.dismiss(t.id)}
                        className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    >
                        فهمیدم!
                    </button>
                </div>
            </div>
        ))
    }
    async function LocationSubmit() {
        if (state == null) {
            makeToast('توجه', 'لطفا استان مورد نظر را انتخاب کنید')
            return false
        }
        if (city == null) {
            makeToast('توجه', 'لطفا شهر مورد نظر را انتخاب کنید')
            return false;
        }
        setIsLoading(true);
        let result = await RequestsUtils.ads.initAdd({
            id: adId,
            stateId: state,
            cityId: city,
        });

        setIsLoading(false);
        if(result.result.id){
            setAdId(result.result.id);
            setCategories(result.result.categories);
            setSecondCategories(result.result.secondCategories);
            setPercent(7);
            return true;
        } else {
            return false;
        }

        // return result && result.isDone;

    }
    async function AboutSubmit() {
        if (title == null) {
            makeToast('توجه', 'لطفا عنوان تابلو را وارد کنید')
            return false;
        }
        if (description == null) {
            makeToast('توجه', 'لطفا توضیحات تابلو را وارد کنید')
            return false;
        }
        if (category == null) {
            makeToast('توجه', 'لطفا دسته بندی مورد نظر را انتخاب کنید')
            return false;
        }
        if (secondCategory == null) {
            makeToast('توجه', 'لطفا زیردسته بندی مورد نظر را انتخاب کنید')
            return false;
        }
        setIsLoading(true);
        let result = await RequestsUtils.ads.addAbout({
            id: adId,
            title: title,
            description: description,
            categoryId: category,
            secondCategoryId: secondCategory
        });
        setIsLoading(false);
        if(result.result.id){
            setThirdCategories(result.result.categories);
            setPercent(15);
            return true;
        } else {
            return false;
        }
        // return result && result.isDone;

    }
    async function AddTypeSubmit() {
        if (addType == null || addType === '') {
            makeToast('توجه', 'لطفا نوع فضا را انتخاب کنید')
            return false;
        }

        setIsLoading(true);
        let result = await RequestsUtils.ads.addType({
            id: adId,
            thirdCategoryId: addType,
        })
        setIsLoading(false);
        if(result.result.id){
            setMaterials(result.result.materials);
            setBannerTypes(result.result.bannerTypes);
            setLightTypes(result.result.lightTypes);
            setPercent(21);
            return true;
        } else {
            return false;
        }
        // return result && result.isDone;

    }
    async function AddTechnicalSubmit() {
        if (material == null || material === '') {
            makeToast('توجه', 'لطفا جنس بدنه را انتخاب کنید')
            return false;
        }
        if (bannerType == null || bannerType === '') {
            makeToast('توجه', 'لطفا جنس بنر را انتخاب کنید')
            return false;
        }
        if (hasLighting && (lightType == null || bannerType === '')) {
            makeToast('توجه', 'لطفا نوع نورپردازی را انتخاب کنید')
            return false;
        }
        if (adWidth == null || adWidth === 0) {
            makeToast('توجه', 'لطفا عرض تابلو را وارد کنید')
            return false;
        }

        if (adHeight == null || adHeight === 0) {
            makeToast('توجه', 'لطفا طول تابلو را وارد کنید')
            return false;
        }
        setIsLoading(true);
        let result = await RequestsUtils.ads.addTechnical({
            id: adId,
            height: adHeight,
            width: adWidth,
            materialId: material,
            bannerTypeId: bannerType,
            lightingTypeId: lightType,
            hasRotation: hasRotation,
            hasLighting: hasLighting
        })
        setIsLoading(false);
        if(result.result.id){
            setDayTimes(result.result.dayTimes);
            setViewerConditions(result.result.viewerConditions);
            setViewerTypes(result.result.viewerTypes);
            setViewerAges(result.result.viewerAges);
            setPercent(29);
            return true;
        } else {
            return false;
        }
        // return result && result.isDone;

    }
    async function AddViewOptions() {
        if (viewerCondition == null || viewerCondition === '') {
            makeToast('توجه', 'لطفا شرایط بیننده را انتخاب کنید')
            return false;
        }
        if (viewerType == null || viewerType === '') {
            makeToast('توجه', 'لطفا نوع بیننده را انتخاب کنید')
            return false;
        }
        if (viewerAge == null || viewerAge === '') {
            makeToast('توجه', 'لطفا رده سنی بیننده را انتخاب کنید')
            return false;
        }
        if (viewDuration == null || viewDuration === 0) {
            makeToast('توجه', 'لطفا مدت زمان رویت تابلو را وارد کنید')
            return false;
        }

        if (viewerSpeed == null || viewerSpeed === 0) {
            makeToast('توجه', 'لطفا سرعت بیننده در لحظه را وارد کنید')
            return false;
        }
        if (dayTime == null || dayTime === '') {
            makeToast('توجه', 'لطفا بهترین زمان بازدید را انتخاب کنید')
            return false;
        }
        setIsLoading(true);
        let result = await RequestsUtils.ads.addViewOptions({
            id: adId,
            viewDuration: viewDuration,
            viewerSpeed: viewerSpeed,
            viewConditionId: viewerCondition,
            viewerTypeId: viewerType,
            viewerAgeId: viewerAge,
            gender: gender,
        })
        setIsLoading(false);
        setPercent(36);
        return !!result.result.id;
        // return result && result.isDone;

    }

    const fetchInitialData = async () => {
        setCityIsLoading(true);
        let result = await RequestsUtils.data.states();
        if (result.isDone) {
            setStates(result.result);
            console.log(result.result)
        }
        // await fetchAds();
        setCityIsLoading(false);
    }

    async function fillCity(value) {
        if (value) {
            setState(value);
            setCityIsLoading(true);
            let result = await RequestsUtils.data.cities(value);
            setCities(result.result);
            setCityIsLoading(false);
        }
    }

    async function changeTitle(value) {
        if (value) {
            setTitle(value);
        }
    }

    async function changeDescription(value) {
        if (value) {
            setDescription(value);
        }
    }

    async function changeCity(value) {
        if (value) {
            setCity(value);
        }
    }

    async function changeCategory(value) {
        if (value) {
            setCategory(value);
        }
    }

    async function changeSecondCategory(value) {
        if (value) {
            setSecondCategory(value);
        }
    }

    useEffect(() => {
        fetchInitialData();
    }, [])

    const TabItem = ({title, index, MyIcon}) => {
        return <button onClick={() => formStep > index ? handleClick(index) : ''} className="flex bg-transparent sm:mr-2 md:mr-2 lg:mr-0 sm:min-w-fit md:min-w-fit lg:w-full font-IranSans text-right">
            <TabItemComponents MyIcon={MyIcon} title={title} index={index} formStep={formStep}/></button>;
    }


    return (
        <>
            <Toaster
               position="bottom-center"
            />
            <FixedNavbar full={false} />

            <div className="relative top-20 bg-breadcrumbs-pattern  bg-black/20 p-2 text-right h-20">
                <div className="container m-auto ">
                <Breadcrumbs dir="rtl" className="bg-transparent fill-white pt-10" separator="/">
                    <a href="../" className="text-sm font-IranSans text-black">
                        صفحه اصلی
                    </a>
                    <a href="#"  className="text-lg font-IranSans text-black font-bold">ثبت تابلو</a>
                </Breadcrumbs>
                </div>
            </div>
            <div >

                <>

                        <>

                        <div className="relative container m-auto top-24 flex min-h-screen sm:flex-col md:flex-col lg:flex-row">

                            <div className="lg:w-1/5 md:w-full ">
                                <div className="sm:hidden md:hidden lg:block xl:block">
                                    <div className="rounded-xlarge shadow-lg border border-gray-100 p-3">
                                        <TabItem title={'موقعیت تابلو'} MyIcon={IconSax.Location} index={0}/>
                                        <TabItem title={'درباره تابلو'} MyIcon={IconSax.InfoCircle} index={1}/>
                                        <TabItem title={'نوع فضا'} MyIcon={IconSax.Category} index={2}/>
                                        <TabItem title={'اطلاعات فنی'} MyIcon={IconSax.RulerPen} index={3}/>
                                        <TabItem title={'شرایط رویت'} MyIcon={IconSax.Eye} index={4}/>
                                        <TabItem title={'جدول تایم های پیک'} MyIcon={IconSax.RowHorizontal} index={5}/>
                                        <TabItem title={'اجاره بها'} MyIcon={IconSax.Wallet} index={6}/>
                                        <TabItem title={'مقررات چاپ و رزرو'} MyIcon={IconSax.Judge} index={7}/>
                                        <TabItem title={'قوانین کنسلی'} MyIcon={IconSax.CloseSquare} index={8}/>
                                        <TabItem title={'تصاویر تابلو'} MyIcon={IconSax.Image} index={9}/>
                                        <TabItem title={'ویدئوهای تابلو'} MyIcon={IconSax.Video} index={10}/>
                                        <TabItem title={'مدارک مالکیت'} MyIcon={IconSax.Document} index={11}/>
                                    </div>
                                </div>

                                <div  className="sm:block md:block lg:hidden xl:hidden">
                                    <div className="flex w-full overflow-x-auto mb-6 p-3">
                                        <TabItem title={'موقعیت تابلو'} MyIcon={IconSax.Location} index={0}/>
                                        <TabItem title={'درباره تابلو'} MyIcon={IconSax.InfoCircle} index={1}/>
                                        <TabItem title={'نوع فضا'} MyIcon={IconSax.Category} index={2}/>
                                        <TabItem title={'اطلاعات فنی'} MyIcon={IconSax.RulerPen} index={3}/>
                                        <TabItem title={'شرایط رویت'} MyIcon={IconSax.Eye} index={4}/>
                                        <TabItem title={'جدول تایم های پیک'} MyIcon={IconSax.RowHorizontal} index={5}/>
                                        <TabItem title={'اجاره بها'} MyIcon={IconSax.Wallet} index={6}/>
                                        <TabItem title={'مقررات چاپ و رزرو'} MyIcon={IconSax.Judge} index={7}/>
                                        <TabItem title={'قوانین کنسلی'} MyIcon={IconSax.CloseSquare} index={8}/>
                                        <TabItem title={'تصاویر تابلو'} MyIcon={IconSax.Image} index={9}/>
                                        <TabItem title={'ویدئوهای تابلو'} MyIcon={IconSax.Video} index={10}/>
                                        <TabItem title={'مدارک مالکیت'} MyIcon={IconSax.Document} index={11}/>
                                    </div>
                                </div>
                            </div>



                            <div className="lg:w-3/5 md:w-full md:block p-3">
                                <form className="">
                                    {formStep === 0 && (
                                        isLoading ? (<CircularLoading />) : (
                                            <>
                                                <LocationPartForm nextPage={nextStep} state={state} city={city}
                                                                  states={states} cities={cities ?? []} fillCity={fillCity}
                                                                  changeCity={changeCity} isLoading={cityIsLoading}/>

                                            </>
                                        ))}

                                    {formStep === 1 && (
                                        <>
                                            <AboutPartForm id={adId} category={category} secondCategory={secondCategory}
                                                           categories={categories} secondCategories={secondCategories}
                                                           changeTitle={changeTitle} changeDescription={changeDescription}
                                                           changeCategory={changeCategory} changeSecondCategory={changeSecondCategory}
                                                           isLoading={isLoading}/>
                                        </>
                                    )}

                                    {formStep === 2 && (
                                        isLoading ? (<CircularLoading />) : (
                                            <>
                                            <h4 className="mt-0">انتحاب نوع فضا</h4>
                                            <div className="flex flex-row justify-between">
                                                {thirdCategory.map(c =>
                                                    <div className="border rounded-md shadow-sm bg-white w-full p-2 m-2">
                                                        <input type="radio" name="addType" value={c.id}
                                                               onChange={e => { setAddType(e.currentTarget.value); }}/>
                                                        <img src={c.icon.path} alt={c.name}/>
                                                        <p>{c.name}</p>

                                                    </div>
                                                )}
                                            </div>
                                        </>
                                        )
                                    )}
                                    {formStep === 3 && (
                                        isLoading ? (<CircularLoading />) : (
                                        <>
                                            <h4 className="mt-0">جنس بدنه</h4>
                                            <Select2 dir="rtl"
                                                     defaultValue={material}
                                                     onChange={(e) => setMaterial(e.target.value)}
                                                     options={
                                                         {placeholder: "جنس بدنه فضای تبلیغاتی خود را مشخص کنید"}
                                                     }
                                                     data={materials.map(e => {
                                                         return {
                                                             key: e.id,
                                                             value: e.id,
                                                             text: e.name,
                                                         };
                                                     })}

                                            />

                                            <h4>جنس بنر</h4>
                                            <Select2 dir="rtl"
                                                     defaultValue={bannerType}
                                                     onChange={(e) => setBannerType(e.target.value)}
                                                     options={
                                                         {placeholder: "جنس بنر فضای تبلیغاتی خود را مشخص کنید"}
                                                     }
                                                     data={bannerTypes.map(e => {
                                                         return {
                                                             key: e.id,
                                                             value: e.id,
                                                             text: e.name,
                                                         };
                                                     })}

                                            />

                                            <h4>ابعاد تابلو</h4>
                                            <p className="flex text-gray-500 text-xs items-center m-1">
                                                <IconSax.InfoCircle className="ml-1 animate-pulse text-primary/70" size="16" />
                                                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است
                                            </p>
                                            <div className="flex flex-row justify-between">
                                                <input
                                                    type="number"
                                                    value={adWidth}
                                                    onChange={e => { setAdWidth(e.currentTarget.value);  }}
                                                    onKeyUp={e => setAdSize(parseInt(adWidth) * parseInt(adHeight))}
                                                    className="input px-2.5 pb-2.5 pt-3 w-full text-sm text-gray-900 focus:outline-primary "
                                                />
                                                <p className="p-2 text-sm bg-gray-200 rounded-md">CM</p>
                                                <input
                                                    type="number"
                                                    value={adHeight}
                                                    onChange={e => { setAdHeight(e.currentTarget.value); }}
                                                    onKeyUp={e => setAdSize(parseInt(adWidth) * parseInt(adHeight))}
                                                    className="input px-2.5 pb-2.5 pt-3 w-full text-sm text-gray-900 focus:outline-primary "
                                                />
                                                <p className="p-2 text-sm bg-gray-200 rounded-md">CM</p>
                                                <input
                                                    type="number"
                                                    value={!isNaN(adSize) ? adSize : ''}
                                                    readOnly={true}
                                                    className="input px-2.5 pb-2.5 pt-3 w-full text-sm text-gray-900 focus:outline-primary "

                                                />
                                                <p className="p-2 text-sm bg-gray-200 rounded-md">CM2</p>
                                            </div>
                                            <div className="grid grid-cols-2 mt-4">
                                                <h4 className="flex flex-row">
                                                    <IconSax.I3DRotate size="20" color="gray" style={{marginLeft: "5px"}} />   چرخش
                                                </h4>
                                                <h4 className="flex flex-row flex-grow">
                                                    <IconSax.CloudLightning size="20" color="gray" style={{marginLeft: "5px"}} />  نورپردازی
                                                </h4>
                                            </div>
                                            <div className="grid grid-cols-2 mt-4">
                                                <span className="rounded-md shadow-sm bg-white flex-row">

                                                    <input id="hasRotation" type="checkbox" name="hasRotation" onChange={() => setHasRotation(prevState => !prevState)}/>
                                                    <label htmlFor='hasRotation' className="mx-2">دارد</label>
                                                </span>
                                                <span className="rounded-md shadow-sm bg-white">
                                                    <input type="checkbox" name="hasLighting" onChange={() => setHasLighting(prevState => !prevState)}/>
                                                    <label htmlFor='hasRotation' className="mx-2">دارد</label>
                                                </span>
                                            </div>
                                            {hasLighting &&
                                                <>
                                                    <h4>نوع نور پردازی</h4>
                                                    <Select2 dir="rtl"
                                                             defaultValue={lightType}
                                                             onChange={(e) => setLightType(e.target.value)}
                                                             options={
                                                                 {placeholder: "انتخاب نوع نورپردازی"}
                                                             }
                                                             data={lightTypes.map(e => {
                                                                 return {
                                                                     key: e.id,
                                                                     value: e.id,
                                                                     text: e.name,
                                                                 };
                                                             })}

                                                    /></>
                                            }
                                        </>
                                        )
                                    )}
                                    {formStep === 4 && (
                                        isLoading ? (<CircularLoading />) : (
                                        <>
                                            <h4 className="mt-0">شرایط بیننده</h4>
                                            <p className="flex text-gray-500 text-xs items-center m-1">
                                                <IconSax.InfoCircle className="ml-1 animate-pulse text-primary/70" size="16" />
                                                شرایط بیننده به معنای وضعیتی است که بیننده حین آن فضای تبلیغاتی را مشاهده می کند
                                            </p>
                                            <Select2 dir="rtl"
                                                     defaultValue={viewerCondition}
                                                     onChange={(e) => setViewerCondition(e.target.value)}
                                                     options={
                                                         {placeholder: "انتخاب شرایط بیننده"}
                                                     }
                                                     data={viewerConditions.map(e => {
                                                         return {
                                                             key: e.id,
                                                             value: e.id,
                                                             text: e.name,
                                                         };
                                                     })}

                                            />

                                            <h4>نوع بیننده</h4>
                                            <Select2 dir="rtl"
                                                     defaultValue={viewerType}
                                                     onChange={(e) => setViewerType(e.target.value)}
                                                     options={
                                                         {placeholder: "انتخاب نوع بیننده"}
                                                     }
                                                     data={viewerTypes.map(e => {
                                                         return {
                                                             key: e.id,
                                                             value: e.id,
                                                             text: e.name,
                                                         };
                                                     })}

                                            />

                                            <h4>رده سنی بینندگان</h4>
                                            <p className="flex text-gray-500 text-xs items-center m-1">
                                                <IconSax.InfoCircle className="ml-1 animate-pulse text-primary/70" size="16" />
                                                رده سنی بینندگان به منزله مناسبت این فضای تبلیغاتی صرفا برای این گروه سنی نیست، بلکه به منظور روشن سازی صاحب کسب و کار از رده سنی مخاطبینی که بیشترین بازدید را از فضای تبلیغاتی شما دارند نمایش داده میشود
                                            </p>
                                            <Select2 dir="rtl"
                                                     defaultValue={viewerAge}
                                                     onChange={(e) => setViewerAge(e.target.value)}
                                                     options={
                                                         {placeholder: "انتخاب رده سنی بینندگان"}
                                                     }
                                                     data={viewerAges.map(e => {
                                                         return {
                                                             key: e.id,
                                                             value: e.id,
                                                             text: e.name,
                                                         };
                                                     })}

                                            />

                                            <h4>مدت زمان رویت توسط بیننده (ثانیه)</h4>
                                            <p className="flex text-gray-500 text-xs items-center m-1">
                                                <IconSax.InfoCircle className="ml-1 animate-pulse text-primary/70" size="16" />
                                                این مقدار قطعا نمیتواند دقیق باشد پس نگران دقت کامل محاسبات خود نباشید! تنها میانگین حدودی زمان رویت این فضای تبلیغاتی کافی است
                                            </p>
                                            <input
                                                type="number"
                                                value={viewDuration}
                                                onChange={e => { setViewDuration(e.currentTarget.value);  }}
                                                className="input px-2.5 pb-2.5 pt-3 w-full text-sm text-gray-900 focus:outline-primary "
                                            />

                                            <h4>سرعت بیننده در لحظه رویت (متر/ثانیه)</h4>
                                            <p className="flex text-gray-500 text-xs items-center m-1">
                                                <IconSax.InfoCircle className="ml-1 animate-pulse text-primary/70" size="16" />
                                                این مقدار قطعا نمیتواند دقیق باشد پس نگران دقت کامل محاسبات خود نباشید! تنها میانگین حدودی سرعت بیننده هنگام رویت این فضای تبلیغاتی کافی است
                                            </p>
                                            <input
                                                type="number"
                                                value={viewerSpeed}
                                                placeholder="مثلا 1"
                                                onChange={e => { setViewerSpeed(e.currentTarget.value);  }}
                                                className="input px-2.5 pb-2.5 pt-3 w-full text-sm text-gray-900 focus:outline-primary "
                                            />

                                            <h4>بهترین زمان بازدید</h4>
                                            <Select2 dir="rtl"
                                                     defaultValue={dayTime}
                                                     onChange={(e) => setDayTime(e.target.value)}
                                                     options={
                                                         {placeholder: "انتخاب زمان بازدید"}
                                                     }
                                                     data={dayTimes.map(e => {
                                                         return {
                                                             key: e.id,
                                                             value: e.id,
                                                             text: e.name,
                                                         };
                                                     })}

                                            />

                                        </>
                                        )
                                    )}
                                    <div className="mt-12 flex flex-row justify-between">
                                        {formStep === 0 ? (
                                            <button type={"button"} className="border rounded-xlarge bg-transparent text-gray-200 py-2 px-6 flex flex-row items-center ">
                                                <IconSax.ArrowCircleRight className="ml-1"/> مرحله قبل</button>
                                        ) : (
                                            <button type={"button"} onClick={() => prevStep()}
                                                    className="border rounded-xlarge bg-transparent text-gray-500 py-2 px-6 flex flex-row items-center hover:bg-primary hover:text-white transition-all ease-in-out duration-500">
                                                <IconSax.ArrowCircleRight className="ml-1"/> مرحله قبل</button>
                                        )}
                                        <button type={"button"} onClick={() => nextStep()}
                                                className="border rounded-xlarge bg-transparent text-gray-500 py-2 px-6 flex flex-row items-center hover:bg-primary hover:text-white transition-all ease-in-out duration-500">مرحله بعد
                                            <IconSax.ArrowCircleLeft  className="mr-1"/></button>
                                    </div>
                                </form>

                            </div>
                            <div className="lg:w-1/5 lg:block md:hidden rounded-xlarge shadow-lg border border-gray-100 p-3 flex flex-col items-center">
                                <h4>درصد پیشرفت ثبت آگهی</h4>
                                <Circle
                                    progress={percent}
                                    bgColor="#9818D6"
                                    textColor="#9818D6"
                                    roundedStroke={false}
                                    showPercentageSymbol={true}
                                    percentageFontColor="#9818D6"
                                />
                            </div>
                        </div>

                    </>
                </>

            </div>

        </>
    )
}
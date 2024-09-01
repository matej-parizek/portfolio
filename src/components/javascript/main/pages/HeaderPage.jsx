import '../../../css/main/pages/HeaderPage.css'

const HeaderPage = ({page, className,name}) =>{
    return <article className={className}>
        <header >
            <h2 className='h2 article-title'>{name}</h2>
        </header>
        <div className='heading'/>
        <>{page}</>
    </article>
}

export default HeaderPage
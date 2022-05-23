import ContentList from './ContentList'

import classes from './Contents.module.css'

export default function Contents(){

return (

    <aside className={classes.sidebar}>

        <h3>Contents</h3>

        <section className={classes.properWidth}> 
        <ul className={classes.sidebar__list}>

            <ContentList title='SOC Investigation'/>
            <ContentList title='Threat Intelligence'/>
            <ContentList title='Recent Cyber Attacks'/>
            <ContentList title='Threat Intelligence'/>
            <ContentList title='Threat Intelligence'/>
            <ContentList title='Threat Intelligence'/>
            <ContentList title='Threat Intelligence'/>
            <ContentList title='Threat Intelligence'/>
            <ContentList title='Cyber Crime'/>
            <ContentList title='Industry News'/>
            <ContentList title='Recent Cyber Attacks'/>
            <ContentList title='Threat Intelligence'/>
            <ContentList title='Threat Intelligence'/>
            <ContentList title='Threat Intelligence'/>
            <ContentList title='Threat Intelligence'/>
            <ContentList title='Threat Intelligence'/>
            <ContentList title='Cyber Crime'/>
            <ContentList title='Industry News'/>
            <ContentList title='Recent Cyber Attacks'/>
            <ContentList title='Threat Intelligence'/>
            <ContentList title='Threat Intelligence'/>
            <ContentList title='Threat Intelligence'/>
            <ContentList title='Threat Intelligence'/>
            <ContentList title='Threat Intelligence'/>
            <ContentList title='Cyber Crime'/>
            <ContentList title='Industry News'/>

        
        </ul>

        </section> 

    </aside>

)


} 
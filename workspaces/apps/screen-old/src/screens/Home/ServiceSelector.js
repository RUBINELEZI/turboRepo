import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import { Card } from 'ui'
import $ from './home.module.scss'
import cx from 'classnames'

const ServiceSelector = ({ session, services, categories }) => {
  const [category, setCategory] = useState(null)
  const menuRef = useRef()

  const toggleCategory = (ev) => {
    const cat = ev.target.textContent
    if (cat === category) {
      setCategory(null)
    } else {
      setCategory(cat)
    }
  }

  return (
    <div ref={menuRef} className={cx($.servicesNav, category && $.active)}>
      <ul className={$.categoriesNav}>
        {categories.map((cat) => (
          <li key={cat} className={cat === category ? $.active : ''}>
            <span onClick={toggleCategory}>{cat}</span>
          </li>
        ))}
      </ul>
      <div className={$.subMenu}>
        {categories.map((cat) => (
          <div
            key={cat}
            className={cx($.services, cat === category && $.active)}
          >
            <ul>
              {services
                .filter((s) => s.category === cat)
                .map((service) => (
                  <li key={service.name}>
                    <Link href={`/services/${service.name}`}>
                      {service.name}
                    </Link>
                  </li>
                ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ServiceSelector

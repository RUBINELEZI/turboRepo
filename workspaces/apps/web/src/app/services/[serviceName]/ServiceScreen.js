'use client'
import Link from 'next/link'
import Card from 'ui/Card'
import { Button } from 'ui/form'
import styles from './services.module.scss'

const ServiceScreen = ({ service, salons }) => {
  console.log({ service })
  return (
    <div className={styles.servicesScreen}>
      <Card title={decodeURI(service)}>
        <div className={styles.salons}>
          {salons.map(salon => (
            <div key={salon.id}>
              <Card title={salon.name}>
                <Link href={`/book?service=${service}&salon=${salon.name}`}>
                  <Button>Book</Button>
                </Link>
              </Card>
            </div>
          ))}
        </div>
      </Card>
    </div>
  )
}

export default ServiceScreen

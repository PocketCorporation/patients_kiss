
import PatientForm from "@/components/forms/PatientForm"
import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    // Todo: OTP Verification \ Passkey Modal
    <div className='flex h-screen max-h-screen'>
      <section className="remove-scrollbar container my-auto">
        <div className="sub-container max-w-[490px]">
          <Image src="/assets/logo-full.svg"
            width={1000}
            height={1000}
            alt='patient'
            className='mb-21 h-10 w-fit'
          />
          <PatientForm />
          <div className="text-14-regularmt-20 flex justify-between">
            <p className="justify-items-end text-dark-600 xl:text-left">
              © 2024 Patients Kiss
            </p>
            <Link href='/?admin=true' className='text-green-500'>
              Admin
            </Link>
          </div>
        </div>
      </section>
      <Image src='/assets/success.gif'
        width={1000}
        height={1000}
        alt='patient'
        className='side-img max-w-[50%]'
      />
    </div>
  )
}
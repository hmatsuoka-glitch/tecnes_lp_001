import Header from '@/components/Header/Header';
import ScrollAnimator from '@/components/ScrollAnimator/ScrollAnimator';
import MainVisual from '@/components/MainVisual/MainVisual';
import Read from '@/components/Read/Read';
import Business from '@/components/Business/Business';
import Flow from '@/components/Flow/Flow';
import About from '@/components/About/About';
import Discovery from '@/components/Discovery/Discovery';
import People from '@/components/People/People';
import Environment from '@/components/Environment/Environment';
import FootNav from '@/components/FootNav/FootNav';
import Footer from '@/components/Footer/Footer';

export default function Page() {
  return (
    <>
      <Header />
      <main className="l-main">
        <MainVisual />
        <Read />
        <Business />
        <Flow />
        <About />
        <Discovery />
        <People />
        <Environment />
        <FootNav />
      </main>
      <Footer />
      <ScrollAnimator />
    </>
  );
}

import React, { useState } from 'react';
import './FavouritesSection2.css';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import 'react-datepicker/dist/react-datepicker.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import BragaImage from '../../Assets/Images/Rectangle-349.png';
import OrchitImage from '../../Assets/Images/Rectangle-356.png';
import RancaImage from '../../Assets/Images/Rectangle-363.png';
import KawahImage from '../../Assets/Images/Rectangle-370.png';
import TaruhaImage from '../../Assets/Images/Rectangle-373.png';
import TebingImage from '../../Assets/Images/Rectangle-376.png';
import SaungImage from '../../Assets/Images/Rectangle-353.png';
import DagoImage from '../../Assets/Images/Rectangle-360.png';
import ZooImage from '../../Assets/Images/Rectangle-367.png';
import FavouritesSection3 from "../FavouritesSection3/FavouritesSection3";

const items = [
    {
      id: 1,
      name: "Braga",
      price: 100000,
      description: "Bandung, Indonesia",
      details:"Braga merupakan salah satu nama jalan populer dan ikonik di Kota Bandung. Sejak zaman kolonial Belanda, jalan Braga memang sudah terkenal di kalangan para bangsawan. Tak heran kepopuleran jalan Braga pun membuatnya menjadi salah satu ikon Kota Bandung. Asal-usul tersebut lahir sebab di kawasan ini pernah bermarkas perkumpulan drama bangsa Belanda yang didirikan pada 18 Juni 1882 oleh Peter Sijthot, seorang Asisten Residen. Kedua, Braga diambil dari kata Bragi, yang merupakan nama dewa puisi dalam mitologi Jerman. Sementara asal-usul nama Braga ketiga berasal dari bahasa Sunda. Ahli sastra Sunda mengatakan bahwa Braga berasal dari kata “Baraga” yang merujuk pada jalan di tepi sungai. Jalan Braga ini terletak di tepi Sungai Cikapundung. Keempat, sejarah lain menyebut Braga dulunya adalah jalan pedati yang berlumpur. Braga dikenal dengan nama Karrenweg atau Pedatiweg.",
      image: BragaImage
    },
    {
      id: 2,
      name: "Orchit Fores",
      price: 60000,
      description: "Bandung, Indonesia",
      details: "Orchid Forest Cikole adalah surga alam tersembunyi di pegunungan Bandung, Jawa Barat. Di tengah hutan lebat yang hijau, ratusan anggrek eksotis tumbuh dengan indahnya. Sesuai dengan namanya, Orchid Forest, hutan ini dikonsep menjadi habitat bagi ratusan jenis bunga berjuluk puspa pesona itu. Suasana sejuk dan misterius hutan ini memikat pengunjung untuk menjelajahi keindahan alam dan mengenal beragam jenis bunga anggrek. Jembatan gantung yang menggantung di atas lembah hijau yang bersanding dengan lampu pada malam hari membuat Orchid Forest Cikole menjadi tempat yang sempurna untuk melarikan diri dari hiruk-pikuk kota dan terhubung dengan keajaiban alam.",
      image: OrchitImage
    },
    {
      id: 3,
      name: "Ranca Upas",
      price: 25000,
      description: "Bandung, Indonesia",
      details: "Ranca Upas Ciwidey menjadi salah satu tempat pelatihan Kopassus, dulunya ranca upas merupakan hutan belantara dengan rawa yang luas. Setelah hutan tersebut bebas dari hewan buas, Ranca Upas dijadikan hutan lindung oleh pihak Perhutani dan kemudian membuka lahan tersebut untuk menjadi sebuah Camping Ground. Ranca Upas Ciwidey, diambil dari kata bahasa Sunda yaitu Ranca yang berarti Rawa, dan Upas adalah seorang petugas Perhutani yang melegenda dikawasan Gunung Patuha. Diceritakan bahwa Upas merupakan seorang pria yang berbadan kekar dengan tinggi 198cm, dia berkebangsaan Belanda. Dia meninggal saat melaksanakan tugas lapangan untuk menjelajahi rawa di kawasan yang sekarang menjadi Ranca Upas, yang sampai saat ini mayatnya tidak pernah ditemukan. Oleh masyarakat setempat dipercaya bahwa arwah Upas, masih ada di alam dunia ini. Pada tahun 1960-1980, masih banyak masyarakat setempat yang bertemu dengan Upas saat mencari kayu bakar di hutan. Konon dikatakan bahwa Upas selalu memakai topi laken (koboi) dengan diameter yang lebar lengkap dengan seragam Perhutani yang pada masa itu berwarna coklat dengan kepala menunduk ditutupi topi lebarnya.",
      image: RancaImage
    },
    {
      id: 4,
      name: "Kawah Putih",
      price: 50000,
      description: "Bandung, Indonesia",
      details: "Kawah Putih Ciwidey merupakan wisata alam kawah vulkanik berwarna putih kehijauan dengan batu kapur di sekelilingnya. Menurut situs Perhutani, kawah putih ini terbentuk dari kaldera letusan Gunung Patuha yang berada di kawasan Ciwidey. Di sini, pengunjung dapat menikmati pemandangan hamparan kawah putih yang sejuk dan kental dengan suasana pedesaan Priangan. Saat fajar, pengunjung akan disuguhkan lanskap matahari terbit yang menawan. Adapun saat malam, gugusan galaksi bima sakti akan terlihat dengan jelas. Sebetulnya, Kawah Putih Ciwidey ini merupakan kawah dari Gunung Patuha. Namun, wisatawan cenderung lebih mengenalnya dengan sebutan Kawah Putih. Area kawah ini berada di ketinggian kurang lebih 2.400 mdpl dengan suhu berkisar antara 8-22 derajat celsius. Kawah Putih Ciwidey berlokasi di Jalan Raya Ciwidey Patengan Km 11 Lebakmuncang Ciwidey, Sugihmukti, Kecamatan Pasir Jambu, Kabupaten Bandung, Jawa Barat 40972.",
      image: KawahImage
    },
    
    {
        id: 5,
        name: "Taruha",
        price: 20000,
        description: "Bandung, Indonesia",
        details: "Ranca Upas Ciwidey menjadi salah satu tempat pelatihan Kopassus, dulunya ranca upas merupakan hutan belantara dengan rawa yang luas. Setelah hutan tersebut bebas dari hewan buas, Ranca Upas dijadikan hutan lindung oleh pihak Perhutani dan kemudian memTahura ini terletak di sebelah utara kota Bandung berjarak 7 km dari pusat kota Bandung, tepatnya berada di Jalan Ir. H. Juanda No.99, Ciburial, Kecamatan Cimenyan, Kabupaten Bandung, Jawa Barat 40198. Jam buka Tahura Taman yang di kelola oleh Pemerintah Provinsi Jawa Barat, buka setiap hari dari Senin-Jumat, pukul 08.00-16.00 WIB. Fasilitas yang Tersedia Suasana yang asri dan adem karena di tutupi oleh pepohon hijau. Taman ini dilengkapi dengan berbagai fasilitas antara lain, Mushola Lahan Parkir Yang Luas, Arena Bermain Anak-anak, Shelter, Panggung Terbuka, Outbound, Paintball, Berkemah Panahan, Flying Fox, Goa Belanda, Goa Jepang, Toilet, Warung Makan, Air Terjun Omas, Harga Tiket",
        image: TaruhaImage
      },
    {
      id: 6,
      name: "Tebing Kraton",
      price: 17000,
      description: "Bandung, Indonesia",
      details: "Tebing Keraton terletak pada kawasan Taman Hutan Raya Djuanda, Desa Ciburial, Kelurahan Dago, Kabupaten Bandung, Jawa Barat. Dikutip melalui laman Direktori Pariwisata, Tebing Keraton dulunya memiliki nama Tebing Jontor. Dinamai Tebing Jontor. Nah, pada tahun 2014, namanya diubah menjadi Tebing Keraton. Alamat: Puncak Kordon, RT.2/RW.10, Ciburial, Kec. Cimenyan, Bandung Barat, Jawa Barat 40198 Provinsi: Jawa Barat Jam: Tutup Buka Kam pukul 05.00 Telepon: (022) 2515895",
      image: TebingImage
    },
    {
      id: 7,
      name: "Saung Udjo",
      price: 68000,
      description: "Bandung, Indonesia",
      details: "Saung Angklung Udjo(SAU) adalah suatu tempat yang merupakan tempat pertunjukan, pusat kerajinan tangan dari bambu, dan workshop instrumen musik dari bambu. Selain itu, SAU mempunyai tujuan sebagai laboratorium kependidikan dan pusat belajar untuk memelihara kebudayaan Sunda dan khususnya angklung. Didirikan pada tahun 1966 oleh Udjo Ngalagena dan istrinya Uum Sumiati, dengan maksud untuk melestarikan dan memelihara seni dan kebudayaan tradisional Sunda. Berlokasi di Jalan Padasuka 118, Bandung Timur Jawa Barat Indonesia. Udjo Ngalegana, seorang pengrajin tradisional, membangun tempat itu pada tahun 1966 sebagai sarana untuk memberi kembali kepada masyarakat. Semua hasil Saung Angklung Udjo digunakan untuk pendidikan siswa lokal, yang sebagian besar adalah anak-anak kurang mampu di daerah tersebut. gan suasana tempat yang segar udaranya dan dikelilingi oleh pohon-pohon bambu, dari kerajinan bambu dan interior bambu sampai alat musik bambu. Disamping pertunjukan rutin setiap sore, Saung Angklung Udjo telah berkali-kali mengadakan pertunjukan khusus yang dilakukan pada pagi atau siang hari. Pertunjukan tersebut tidak terbatas diadakan di lokasi Saung Angklung Udjo saja, tetapi berbagai undangan tampil di berbagai tempat baik di dalam maupun di luar negeri, pada bulan Agustus tahun 2000 di Sasana Budaya Ganesha ITB, Bandung, Saung Angklung Udjo mengadakan konser kolaborasi dengan penyanyi cilik yang dijuluki Shirley Temple-nya Indonesia, yaitu Sherina. Alamat: Jl. Padasuka No.118, Pasirlayung, Kec. Cibeunying Kidul, Kota Bandung, Jawa Barat 40192, Provinsi: Jawa Barat, Jam: Tutup Buka Kam pukul 08.00, Telepon: 0821-8282-1200",
      image: SaungImage
    },
    {
      id: 8,
      name: "Dago Dream Park",
      price: 25000,
      description: "Bandung, Indonesia",
      details: "Pada Juli 2018 lalu, Dago DreamPark dikunjungi tim Net Lifestyle Weekend List. Sebelumnya, mereka menaiki Bandros untuk berkeliling di Bandung. Net Lifestyle yaitu tayangan program Magazine seperti iLook, Dsign, Weekend List dan Chefs Table. Program yang membahas berbagai informasi dan tips terkini seputar dunia fashion/style, karya arsitektur yang unik, menarik, ide desain interior yang inspiratif, desain furniture yang kreatif, mereferensi tempat makan, rekreasi, event seru, film atau musik serta Cooking Show bersama Chef Chandra invite langsung guest (Artis dan Public Figure). Alamat: Mekarwangi, Jl. Dago Giri No.Km. 2.2, Pagerwangi, Kec. Lembang, Kabupaten Bandung Barat, Jawa Barat 40135 Provinsi: Jawa Barat Jam: Tutup ⋅ Buka Kam pukul 09.00 Telepon: 0812-2230-068",
      image: DagoImage
    },
    {
      id: 9,
      name: "Bandung Zoo",
      price: 45000,
      description: "Bandung, Indonesia",
      details: "Kebun Binatang Bandung ini pada awalnya dikenal dengan nama Derenten (dalam Bahasa sunda, dierentuin) yang artinya kebun binatang. Kebun Binatang Bandung didirikan pada tahun 1930 oleh Bandung Zoological Park (BZP), yang dipelopori oleh Direktur Bank Dennis, Hoogland. Pengesahan pendirian Kebun Binatang ini diwenangi oleh Gubernur Jenderal Hindia Belanda dan pengesahannya dituangkan pada keputusan 12 April 1933 No.32. Pada saat Jepang menguasai daerah ini, tempat wisata ini kurang terkelola, hingga pada tahun 1948, dilakukan rehabilitasi untuk mengembalikan fungsi tempat wisata ini. Pada tahun 1956, atas inisiatif dari Raden Ema Bratakusumah, Bandung Zoological Park dibubarkan dan berganti menjadi Yayasan Marga Satwa Tamansari pada tahun 1957. Kebun binatang ini menempati luas lahan 13,5 ha yang topografinya bergelombang dengan penggunaan 18,25% untuk areal perkandangan, 55,20% untuk pertamanan dan lesehan, 4,7% untuk taman ria dan kolam perahu, dan 2,4% untuk pengolahan sampah. Sisanya digunakan untuk bangunan kantor, museum aquarium, dan jalan. Alamat: Jl. Kebun Binatang No.6, Lb. Siliwangi, Kecamatan Coblong, Kota Bandung, Jawa Barat 40132 Dibuka: 1933 Jam:Tutup - Buka Kam pukul 09.00 Jumlah satwa: 1.600 Provinsi: Jawa Barat Telepon: 0811-2347-733",
      image: ZooImage
    },
];
function FavouritesSection2({ addItemToCart }) {
    const [showModal, setShowModal] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);
    const [cartItems, setCartItems] = useState([]);

    const handleShowModal = (item) => {
        setSelectedItem(item);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    const handleAddToCart = () => {
        if (selectedItem) {
            addItemToCart(selectedItem);
            setCartItems((prevItems) => [...prevItems, selectedItem]);
            setShowModal(false);
        }
    };

    return (
        <div className='favourites-section2 my-4 my-sm-5'>
            <Container>
                <div className="row g-4">
                    {items.map((item) => (
                        <div key={item.id} className="col-sm-6 col-lg-4 text-blue2">
                            <div
                                className={`spa-div${item.id} img-hover d-flex align-items-end justify-content-center rounded position-relative`}
                            >
                                <Container className="button-container-section">
                                    <div className="button-container3 position-absolute">
                                        <form>
                                            <h5
                                                className="text-fs2"
                                                style={{ marginLeft: "35px", marginTop: "-20px" }}
                                            >
                                                {item.name}
                                            </h5>
                                            <Button
                                                className="button-fs2"
                                                onClick={() => handleShowModal(item)}
                                            >
                                                <span className="button-pilih text-detail fw-semibold">
                                                    Pilih
                                                </span>
                                            </Button>
                                            <h5
                                                className="harga-fs2 text-dark"
                                                style={{ marginLeft: "35px", marginTop: "-20px" }}
                                            >
                                                Rp. {item.price.toLocaleString()}
                                            </h5>
                                        </form>
                                    </div>
                                </Container>
                            </div>
                            <p className="text-objek2 mb-4 h6 text-left2"></p>
                        </div>
                    ))}
                </div>
            </Container>
            <Modal className='custom-modal2' show={showModal} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                </Modal.Header>
                <Modal.Body>
                    {selectedItem && (
                        <div className='detail-liburan py-5 position-relative'>
                            <div className='bg-shape1 position-absolute'></div>
                            <Container>
                                <div className="row">
                                    <div className='col-md-12 z-2 '>
                                        <div>
                                            <img src={selectedItem.image} style={{height: '350px', width: '350px', marginLeft: '120px'}} alt={selectedItem.name}/>
                                        </div>
                                        <p className='text-start text-dark fw-semibold'>
                                            <h2>{selectedItem.name}</h2>
                                        </p>
                                        <p className='text-start text-dark fw-semibold'>
                                            {selectedItem.description}
                                        </p>
                                        <div className='col-md-12 z-2'>
                                            <p className='text-start text-start1 text-dark small-text2'>
                                                {selectedItem.details}
                                            </p>
                                        </div>
                                    </div>
                                    <div>
                                        <Button  className="button-modal" style={{ outline: 'none' }} onClick={handleAddToCart}>
                                            Pilih
                                        </Button>
                                    </div>
                                </div>
                            </Container>
                        </div>
                    )}
                </Modal.Body>
            </Modal>
            <FavouritesSection3 selectedItems={cartItems} />
        </div>
    );
}

export default FavouritesSection2;
